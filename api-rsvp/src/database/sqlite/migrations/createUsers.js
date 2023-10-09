const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR,
  phone VARCHAR,
  email VARCHAR,
  canSendNotification BOOLEAN
)
`;

module.exports = createUsers;