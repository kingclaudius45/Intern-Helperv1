function loadPosts() {
  $.get("/api/jobs", (posts) => {
    for (let post of posts) {
      $("#posts-container").append(
        $(`
            <div class="col-4 mb-4">
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">${post.companyName}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Test Date:</h6>
                <p class="card-text">${post.testDate}</p>
                <h6 class="card-subtitle mb-2 text-muted">Last Date:</h6>
                <p class="card-text">${post.lastDate}</p>
                <h6 class="card-subtitle mb-2 text-muted">Remaining-Days:</h6>
                <p class="card-text"></p>
                <a href="${post.link}" class="card-link">Link</a>
              </div>
            </div>
            </div>

        `)
      );
    }
  });
}
