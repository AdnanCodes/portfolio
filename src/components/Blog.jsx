import React from "react";

// https://hackernoon.com/building-a-blog-with-react-and-contentful-fd538f68f6fb
// I think this would be good solution to implement and customize further with React Bootstrap
// Perhaps design reusable blog components and prepare it part of npm package
// Lot more research may be needed but components could be design in a reusable style with combinations of react bootstrap
// Some of the challenges may expected. Integrated testing should be added as part
// Blog should avoid any using routing but conditional rendering via accordion

// Markdown or text files should be used to parse the information
// Need to design custom parser and set some kind of format for anyone to use it renders well
// Formatting of render can by set with css, not use scss as it will require need of node sass before scss can be used for NPM package
// Styling has to be done basic render, not usage of library

// Plan
// Part 1 - Make the Parser
// Part 2 - Automatically render the text from parsing
// Part 3 - Add styling tweaks via basic css
// Part 4 - Discover Process of making npm package
// Part 5 - Gather basic feedback
// Part 6 - Add some upgrades and publish the package -> Make the project open source for sure!

// Add more TODOS
const Blog = () => {
  return <section>Let's build Blog page</section>;
};

export default Blog;
