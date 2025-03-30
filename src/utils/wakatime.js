async function getWakaTime() {
  const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
  const FUNCTION_URL = `${SUPABASE_URL}/functions/v1/wakatime-proxy`;
  
  try {
    const response = await fetch(FUNCTION_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // No need to send Authorization header - that's handled on the server side
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error response from server: ${response.status}`, errorText);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("WakaTime data received:", data);
    
    // If the Edge Function is returning just the coding hours
    if (data.codingHours !== undefined) {
      return data.codingHours;
    }
    
    // Otherwise, parse the full response
    if (data.data && data.data.categories) {
      const codingCategory = data.data.categories.find(
        (category) => category.name === "Coding"
      );

      if (codingCategory) {
        return codingCategory.hours;
      }
    }

    console.log("Error: No coding data found in response:", data);
    return null;
  } catch (error) {
    console.error("Error fetching WakaTime hours:", error);
    return null;
  }
}

export default getWakaTime;