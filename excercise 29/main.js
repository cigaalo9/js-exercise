function fetchJSONFromFile() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Barkhad",
        role: "JavaScript Learner",
        status: "Active"
      });
    }, 2000);
  });
}

async function fetchJSONData() {
  console.log("Start fetching JSON data...");

  const data = await fetchJSONFromFile();
  console.log("Fetched JSON Data:", data);
}

fetchJSONData();
console.log("This message runs immediately and is not blocked.");
