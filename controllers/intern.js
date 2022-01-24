const { Offer } = require("../db/models");

async function createNewPost(id,companyName,link,lastDate,testDate) {
  const offer = await Offer.create({
    link,
    companyName,
    id,
    lastDate,
    testDate,
  });

  return offer;
}

/**
 * findAllPosts({username: ''})
 * findAllPosts({title: ''})
 */

async function findAllPosts(query) {
  // TODO: handle query params
  const offers = await Offer.findAll();

  return offers;
}
async function deleteJobById(id) {
  return await Offer.destroy({
    where: { id },
  });
}

module.exports = {
  createNewPost,
  findAllPosts,
  deleteJobById,
};

/* Test Code

async function task() {
  //   console.log(
  //     await createNewPost(
  //       1,
  //       "This is a sample post",
  //       "Body of the post goes here"
  //     )
  //   );
  //   console.log(
  //     await createNewPost(2, "This is another post", "Some body example as well")
  //   );

  const post = await showAllPosts();
  for (let p of post) {
    console.log(
      `${p.title}\nauthor: ${p.user.username}\n${p.body}\n================\n`
    );
  }
}

task();
*/
