exports.createBlogPost = (req, res, next) => {
  const title = req.body.title;
  // const image = req.body.image;
  const body = req.body.body;

  const result = {
    message: "Create Blog Post Succes",
    data: {
      post_id: 1,
      title: "Title Blog",
      image: "imageFile.png",
      body: "Lorem Ipsum is simply dummy text of the printing",
      created_at: "2/7/2023",
      author: {
        uid: 1,
        name: "Testing",
      },
    },
  };
  res.status(201).json(result);
};
