async function getWakaTime() {
  const apiKey = import.meta.env.VITE_WAKATIME_API_KEY;

  if (!apiKey) {
    console.error("Error: WakaTime API key not found.");
    return null;
  }

  const url = "https://wakatime.com/api/v1/users/current/stats";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data.data && data.data.categories) {
      const codingCategory = data.data.categories.find(
        (category) => category.name === "Coding"
      );

      if (codingCategory) {
        return codingCategory.hours;
      }
    }

    console.log("Error: No coding data found.");
    return null;
  } catch (error) {
    console.error("Error fetching WakaTime hours:", error);
    return null;
  }
}

export default getWakaTime;
