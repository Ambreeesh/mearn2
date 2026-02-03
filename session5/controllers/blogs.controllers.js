const Blog = require("../modals/blog.modal");

const createBlog =async (req, res) => {
    console.log(req.body);
    try {
    //    const newBlog = await Blog.create(req.body);
    const newBlog = new Blog(req.body)
    await newBlog.save();
        res.status(201).send(newBlog);
    } catch (error) {
        res.status(500).send({message: "Oops something went wrong"})
    }
 
}

module.exports = {createBlog};