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

    if (data.codingHours !== undefined) {
      return data.codingHours;
    }

    if (data.data?.categories) {
      const codingCategory = data.data.categories.find(
        (category) => category.name === "Coding"
      );
      if (codingCategory) return codingCategory.hours;
    }

    return null;
  } catch {
    return null;
  }
}

export default getWakaTime;