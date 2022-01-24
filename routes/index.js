const { Router } = require("express");
const {
  findAllPosts,
  createNewPost,
  deleteJobById,
} = require("../controllers/intern");

const route = Router();

route.get("/", async (req, res) => {
  const post = await findAllPosts();

  res.status(200).send(post);
});


route.delete("/:id", async (req, res) => {
  const job = await deleteJobById(req.params.id);
  res.sendStatus(200);

});



route.post("/", async (req, res) => {
  const { id, companyName, link,lastDate,testDate  } = req.body;

  if (!id || !link || !companyName || !lastDate || !testDate) {
    return res
      .status(400)
      .send({ error: "need id, link, companyname,lastdate and testdate to create a post." });
  }

  const post = await createNewPost( id, companyName, link,lastDate,testDate);

  res.status(200).send(post);
});

module.exports = {
  jobsRoute: route,
};
