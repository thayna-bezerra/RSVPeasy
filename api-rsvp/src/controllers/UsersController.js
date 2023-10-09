const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {
  async create(req, res) {
    const { name, phone, email, canSendNotification } = req.body;

    const database = await sqliteConnection();
    const checkUserExist = await database.get("SELECT * FROM users WHERE email = (?)", [email])

    if(checkUserExist){
      throw new AppError("Este e-mail já está em uso.");
    }

    await database.run(
      "INSERT INTO users (name, phone, email, canSendNotification) VALUES (?, ?, ?, ?)",
      [name, phone, email, canSendNotification]
    );

    return res.status(201).json();
  }
}

module.exports = UsersController;