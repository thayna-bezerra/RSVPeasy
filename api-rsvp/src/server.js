require("express-async-errors");

const AppError = require("./utils/AppError");

const express = require("express");
const app = express();

const UsersController = require("./controllers/UsersController.js")
const usersController = new UsersController;

app.use(express.json());

app.post("/", usersController.create);

app.use((error, req, res, next) => {
  if(error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.error(error); 

  return res.status(500).json({
    status: "error",
    message: "internal server error",
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));