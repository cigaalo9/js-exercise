async function fetchPosts() {
    console.log("Requesting posts from server...");

    try {
        const result = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!result.ok) {
            throw new Error("Request failed with status " + result.status);
        }

        const posts = await result.json();

        posts.forEach((post) => {
            console.log("Post Title:", post.title);
        });

    } catch (err) {
        console.error("Failed to fetch posts:", err.message);
    }
}

fetchPosts();
