const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

/**
 * GET /
 * HOME
*/
router.get('', async (req, res) => {
  try {
    const locals = {
      title: "NodeJs Blog",
      description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    let perPage = 10;
    let page = req.query.page || 1;

    const data = await Post.aggregate([ { $sort: { createdAt: -1 } } ])
    .skip(perPage * page - perPage)
    .limit(perPage)
    .exec();

    // Count is deprecated - please use countDocuments
    // const count = await Post.count();
    const count = await Post.countDocuments({});
    const nextPage = parseInt(page) + 1;
    const hasNextPage = nextPage <= Math.ceil(count / perPage);

    res.render('index', { 
      locals,
      data,
      current: page,
      nextPage: hasNextPage ? nextPage : null,
      currentRoute: '/'
    });

  } catch (error) {
    console.log(error);
  }

});

// router.get('', async (req, res) => {
//   const locals = {
//     title: "NodeJs Blog",
//     description: "Simple Blog created with NodeJs, Express & MongoDb."
//   }

//   try {
//     const data = await Post.find();
//     res.render('index', { locals, data });
//   } catch (error) {
//     console.log(error);
//   }

// });


/**
 * GET /
 * Post :id
*/
router.get('/post/:id', async (req, res) => {
  try {
    let slug = req.params.id;

    const data = await Post.findById({ _id: slug });

    const locals = {
      title: data.title,
      description: "Simple Blog created with NodeJs, Express & MongoDb.",
    }

    res.render('post', { 
      locals,
      data,
      currentRoute: `/post/${slug}`
    });
  } catch (error) {
    console.log(error);
  }

});


/**
 * POST /
 * Post - searchTerm
*/
router.post('/search', async (req, res) => {
  try {
    const locals = {
      title: "Seach",
      description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    let searchTerm = req.body.searchTerm;
    const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9 ]/g, "")

    const data = await Post.find({
      $or: [
        { title: { $regex: new RegExp(searchNoSpecialChar, 'i') }},
        { body: { $regex: new RegExp(searchNoSpecialChar, 'i') }}
      ]
    });

    res.render("search", {
      data,
      locals,
      currentRoute: '/'
    });

  } catch (error) {
    console.log(error);
  }

});


/**
 * GET /
 * About
*/
router.get('/about', (req, res) => {
  res.render('about', {
    currentRoute: '/about'
  });
});


function insertPostData() {
  Post.insertMany([
    {
      title: "Introduction to React.js",
      body: "Discover the fundamentals of React.js and learn how to build modern, interactive user interfaces."
    },
    {
      title: "Getting Started with TypeScript",
      body: "Learn TypeScript, a superset of JavaScript that adds static typing and other powerful features to your code."
    },
    {
      title: "Exploring GraphQL",
      body: "Dive into GraphQL, a query language for APIs, and learn how to design and implement flexible, efficient APIs."
    },
    {
      title: "Mastering Vue.js",
      body: "Master Vue.js, a progressive JavaScript framework, and build scalable, maintainable web applications."
    },
    {
      title: "Concurrency in Go",
      body: "Explore concurrency in Go programming language and learn how to write efficient, concurrent programs."
    },
    {
      title: "Data Structures and Algorithms in Python",
      body: "Learn essential data structures and algorithms in Python and improve your problem-solving skills."
    },
    {
      title: "Machine Learning with TensorFlow.js",
      body: "Get started with machine learning using TensorFlow.js and build predictive models in the browser or Node.js."
    },
    {
      title: "Building Serverless Applications with AWS Lambda",
      body: "Learn how to build serverless applications with AWS Lambda and other AWS services for scalable, cost-effective solutions."
    },
    {
      title: "Modern Web Development with Angular",
      body: "Explore modern web development with Angular framework and build dynamic, responsive web applications."
    },
    {
      title: "DevOps Practices and Tools",
      body: "Discover DevOps practices and tools for automating software development, testing, and deployment processes."
    },
  ]);
}


 insertPostData();


module.exports = router;
