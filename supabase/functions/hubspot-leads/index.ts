const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface LeadPayload {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
  edad?: string;
  presupuesto?: string;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const token = Deno.env.get("HUBSPOT_ACCESS_TOKEN");
    if (!token) {
      console.error("Missing HUBSPOT_ACCESS_TOKEN");
      return new Response(
        JSON.stringify({ error: "Server is not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const body = (await req.json()) as LeadPayload;
    const { nombre, apellido, email, telefono, mensaje } = body;

    if (!email || !nombre) {
      return new Response(
        JSON.stringify({ error: "nombre and email are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const properties: Record<string, string> = {
      firstname: nombre,
      email,
    };
    if (apellido) properties.lastname = apellido;
    if (telefono) properties.phone = telefono;
    if (mensaje) properties.message = mensaje;

    const hsRes = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ properties }),
    });

    const hsData = await hsRes.json();

    if (!hsRes.ok) {
      // If contact already exists, try to update via search
      if (hsRes.status === 409) {
        console.log("Contact exists, attempting update", hsData);
        return new Response(
          JSON.stringify({ ok: true, existing: true }),
          { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      console.error("HubSpot error", hsRes.status, hsData);
      return new Response(
        JSON.stringify({ error: "HubSpot rejected the request", details: hsData }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ ok: true, id: hsData.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("hubspot-leads error", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
