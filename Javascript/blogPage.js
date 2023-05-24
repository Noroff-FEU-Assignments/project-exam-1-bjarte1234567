const apiBase = "https://www.bjarteol.no/wp-json/wp/v2/posts";
const perPage = 10;
let page = 1;
let loadMoreBtn;

console.log(apiBase);

function fetchPosts() {
  const apiURL = `${apiBase}?per_page=${perPage}&page=${page}`;

  fetch(apiURL)
    .then((response) => response.json())
    .then((posts) => {
      const list = document.createElement("ul");
      posts.forEach((post) => {
        const item = document.createElement("li");
        const title = document.createElement("h2");
        const content = document.createElement("p");
        title.textContent = post.title.rendered;
        content.innerHTML = post.content.rendered;
        item.append(title);
        item.append(content);
        item.classList.add("post-item");
        list.append(item);
      });

      const container = document.getElementById("posts-container");
      container.append(list);

      // Check if there are more posts available
      if (posts.length >= perPage) {
        if (!loadMoreBtn) {
          loadMoreBtn = createLoadMoreButton();
          container.after(loadMoreBtn);
        }
      } else {
        if (loadMoreBtn) {
          loadMoreBtn.remove();
        }
      }

      if (page === 1) {
        const footer = document.createElement("footer");
        footer.classList.add("footer-container");
        footer.innerHTML = "<p>Copyright © 2023 - All rights reserved</p>";
        document.body.append(footer);
      }
    })
    .catch((error) => console.error(error));
}

function createLoadMoreButton() {
  const loadMoreBtn = document.createElement("button");
  loadMoreBtn.textContent = "Load More";
  loadMoreBtn.classList.add("load-more-btn");
  loadMoreBtn.addEventListener("click", loadMorePosts);
  return loadMoreBtn;
}

function loadMorePosts() {
  page++;
  fetchPosts();
}

// Call the initial fetchPosts function to load the first page
fetchPosts();
