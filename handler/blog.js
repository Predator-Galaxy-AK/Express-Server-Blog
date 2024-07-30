const blog = [];

const createBlog = (req, res) => {
  const { author, content } = req.body;

  if (author && content) {
    blog.push({ author, content });
    return res.status(201).send('Created Successfully');
  }

  res.status(400).send('Author and content are required');
};

const readAllBlogs = (req, res) => {
  res.status(200).json(blog);
};

const readBlog = (req, res) => {
  const blogId = parseInt(req.params.blogId, 10);

  if (blogId >= 0 && blogId < blog.length) {
    return res.status(200).json(blog[blogId]);
  }

  res.status(404).send('Blog not found');
};

const updateBlog = (req, res) => {
  const blogId = parseInt(req.params.blogId, 10);
  const { author, content } = req.body;

  if (blogId >= 0 && blogId < blog.length) {
    if (author && content) {
      blog[blogId] = { author, content };
      return res.status(200).send('Full Updated');
    }
    return res.status(400).send('Author and content are required');
  }

  res.status(404).send('Blog not found');
};

const patchBlog = (req, res) => {
  const blogId = parseInt(req.params.blogId, 10);
  const { author, content } = req.body;

  if (blogId >= 0 && blogId < blog.length) {
    if (author) {
      blog[blogId].author = author;
    }
    if (content) {
      blog[blogId].content = content;
    }
    return res.status(200).send('Partial Updated');
  }

  res.status(404).send('Blog not found');
};

const deleteBlog = (req, res) => {
  const blogId = parseInt(req.params.blogId, 10);

  if (blogId >= 0 && blogId < blog.length) {
    blog.splice(blogId, 1);
    return res.status(200).send('Deleted');
  }

  res.status(404).send('Blog not found');
};

module.exports = {
  createBlog,
  readAllBlogs,
  readBlog,
  updateBlog,
  patchBlog,
  deleteBlog
};
