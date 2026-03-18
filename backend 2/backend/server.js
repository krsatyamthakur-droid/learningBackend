import express from "express";
const app = express();
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });
const port = process.env.PORT || 3000;
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "Programmer joke",
      content:
        "Why do programmers prefer dark mode? Because light attracts bugs.",
    },
    {
      id: 4,
      title: "Array joke",
      content:
        "Why did the array break up? Because it had too many problems to index.",
    },
    {
      id: 5,
      title: "JavaScript joke",
      content:
        "Why was JavaScript sad? Because it did not know how to class itself.",
    },
  ];

  res.send(jokes);
});
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
