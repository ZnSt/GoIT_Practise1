const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/product");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");

const isAuth = require("./middleware/auth");
const PORT = 3333;
const HOST = "http://localhost";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/product", isAuth, productRoutes.routes);
app.use("/auth", authRoutes.routes);
app.use("/user", userRoutes.routes);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${HOST}:${PORT}`);
});
