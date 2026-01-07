function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let succes = true;
      if (succes) {
        resolve({ id: 12, name: "abdullahi" });
      } else {
        reject("failed to fetch user data");
      }
    }, 3000);
  });
}

fetchUserData()
  .then((data) => console.log("User Data:", data))
  .catch((error) => console.error("Error:", error));
