import { BaseDataBase } from './BaseDataBase'

export class Migrations extends BaseDataBase {

   createTables = async () => {
      await BaseDataBase.connection.raw
         (`

      CREATE TABLE IF NOT EXISTS labook_users(
         id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) UNIQUE NOT NULL,
         password VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS labook_posts(
         id VARCHAR(255) PRIMARY KEY,
         photo VARCHAR(255) NOT NULL,
         description VARCHAR(255) NOT NULL,
         type ENUM("normal","event") DEFAULT "normal",
         created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
         author_id VARCHAR(255),
         FOREIGN KEY (author_id) REFERENCES labook_users (id)
      );

      CREATE TABLE IF NOT EXISTS labook_friendship(
        user VARCHAR(255),
        make_friendship VARCHAR(255),
        PRIMARY KEY(user,make_friendship),
        FOREIGN KEY(user) REFERENCES labook_users(id),
        FOREIGN KEY(make_friendship) REFERENCES labook_users(id)
      );

   `)
         .then(() => {
            console.log(`Tables created successfully!`)
         })
         .catch((error: any) => console.log(error.sqlMessage || error.message))
   }
}

const migrations = new Migrations()
migrations.createTables()