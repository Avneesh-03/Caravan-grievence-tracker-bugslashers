const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Server is running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
app.use(express.json()); // parse JSON body

const complaintRoutes = require("./routes/complaintRoutes");
app.use("/api/complaints", complaintRoutes);
