import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.resolve(__dirname, "../database.sqlite");
const db = new sqlite3.Database(dbPath, err => {
  if (err) return console.error("Erro ao conectar ao banco de dados SQLite:", err.message);

  db.run(
    `
    CREATE TABLE IF NOT EXISTS submissions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        message TEXT NOT NULL,
        createdAt TEXT DEFAULT (datetime('now', 'localtime'))
      )
    `,
    err => {
      if (err) console.error("Erro ao criar tabela:", err.message);
    }
  );
});

export default db;
