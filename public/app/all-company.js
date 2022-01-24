function loadcompany() {
  $.get("/api/jobs", (posts) => {
    for (let post of posts) {
      $("#comp").append(
        $(`
          <li class="list-group-item">${post.companyName}</li>
        `)
      );
    }
  });
}
