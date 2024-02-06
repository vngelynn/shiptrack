const { pool } = require("./pool")

async function destroyDatabase() {
  await pool.query(
    `
  DROP TABLE IF EXISTS users
`,
    (err) => {
      if (err) {
        console.error("Error deleting the users table", err)
      } else {
        console.log("Users table deleted successfully")
      }
    }
  )

  await pool.query(
    `
  DROP TABLE IF EXISTS shipments
`,
    (err) => {
      if (err) {
        console.error("Error deleting the shipments table", err)
      } else {
        console.log("Shipments table deleted successfully")
      }
    }
  )
}

async function initiateDatabase() {
  await pool.query(
    `
  CREATE TABLE users (
    email VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  )
`,
    (err) => {
      if (err) {
        console.error("Error creating the users table", err)
      } else {
        console.log("Users table created successfully")
      }
    }
  )

  await pool.query(
    `
CREATE TABLE shipments (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  date DATE,
  secondary_date DATE,
  tracking VARCHAR(255),
  FOREIGN KEY (username) REFERENCES users(username)
)
`,
    (err) => {
      if (err) {
        console.error("Error creating the shipments table", err)
      } else {
        console.log("Shipments table created successfully")
      }
    }
  )
}

async function insertDemoUser() {
  await pool.query(`INSERT INTO users(username, email, password) VALUES ($1, $2, $3);`, ['demo', 'demo@shiptrack.com', 'pw'])
}

insertDemoUser()