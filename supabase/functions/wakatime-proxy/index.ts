
// IMPORTANT: Update the CORS allowed origins to include your domain
const ALLOWED_ORIGINS = [
  'http://localhost:5173',  // Your local development server
  'https://mohammed-fandees.vercel.app',  // Your production domain
  '*' // Alternatively, allow all origins while testing
];

// CORS headers setup
const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // This will be overwritten below
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
};

Deno.serve(async (req: { headers: { get: (arg0: string) => string; }; method: string; }) => {
  // Get the request origin
  const origin = req.headers.get('origin') || '*';
  
  // Set the proper origin in CORS headers
  // Use the requesting origin if it's in the allowed list, otherwise use '*'
  const responseHeaders = {
    ...corsHeaders,
    'Access-Control-Allow-Origin': ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS.includes('*') ? '*' : ALLOWED_ORIGINS[0]
  };

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204, // No content status for OPTIONS
      headers: responseHeaders
    });
  }

  try {
    // Get the API key from environment variables
    const apiKey = Deno.env.get('WAKATIME_API_KEY');
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: 'WakaTime API key not configured on the server' }),
        { 
          status: 500,
          headers: { ...responseHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Fetch data from WakaTime API
    const response = await fetch('https://wakatime.com/api/v1/users/current/stats', {
      method: 'GET',
      headers: {
        'Authorization': `Basic ${btoa(apiKey)}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `WakaTime API error: ${response.status}` }),
        { 
          status: response.status,
          headers: { ...responseHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    const data = await response.json();
    
    // Extract just the coding hours or return the full data
    let result = data;
    
    if (data.data && data.data.categories) {
      const codingCategory = data.data.categories.find(
        (category: { name: string; }) => category.name === 'Coding'
      );
      
      if (codingCategory) {
        result = { codingHours: codingCategory.hours };
      }
    }

    // Return the processed data
    return new Response(
      JSON.stringify(result),
      { 
        headers: { ...responseHeaders, 'Content-Type': 'application/json' },
        status: 200
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...responseHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    );
  }
});