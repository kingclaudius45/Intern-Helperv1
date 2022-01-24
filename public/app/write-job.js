let btnSubmit = $("#btnSubmit");

btnSubmit.click(postJob);

function postJob(req, res) {
  $.post("/api/jobs", {
    id: $("#id").val(),
    link: $("#link").val(),
    companyName: $("#companyName").val(),
    testDate: $("#test").val(),
    lastDate: $("#last").val(),
  });
}
