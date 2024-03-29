const { pool } = require("../db/pool")

async function createShipment(username, title, date, secondary_date, tracking) {
  const result = await pool.query(
    `
      INSERT INTO shipments(username, title, date, secondary_date, tracking)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `,
    [username, title, date, secondary_date, tracking]
  )

  return result.rows[0]
}

async function readShipments(username) {
  // TODO: include when add user WHERE username = $1; and remove LIMIT 3
  const result = await pool.query(
    `
  SELECT *
  FROM shipments;
`,
    []
  )

  return result.rows
}

async function readShipment(id) {
  const result = await pool.query(`
    SELECT *
    FROM shipments
    WHERE id = $1;
  `, [id])

  return result.rows[0];
}

async function updateShipment(id, tracking) {
  const result = await pool.query(
    `
  UPDATE shipments
  SET tracking = $2
  WHERE id = $1
  RETURNING *;
  `,
    [id, tracking]
  )

  return result.rows[0]
}

async function deleteShipment(id) {
  const result = await pool.query(
    `
  DELETE FROM shipments WHERE id = $1;
`,
    [id]
  )

  return result.rows
}

module.exports = {
  createShipment,
  readShipments,
  readShipment,
  deleteShipment,
  updateShipment,
}
