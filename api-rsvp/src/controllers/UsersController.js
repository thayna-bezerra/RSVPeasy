const AppError = require("../utils/AppError");

class UsersController {
  create(req, res) {
    const { name, phone, email, canSendNotification } = req.body;

    if (!name){
      throw new AppError("nome é obrigatório");
    }

    res.status(201).json({name, phone, email, canSendNotification});
  }
}

module.exports = UsersController;