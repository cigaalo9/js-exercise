function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;

      if (success) {
        resolve({ id: 12, name: "abdullahi" });
      } else {
        reject("failed to fetch user data");
      }
    }, 3000);
  });
}

async function getUserData() {
  try {
    const data = await fetchUserData();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

getUserData();
