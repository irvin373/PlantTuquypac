import { openDatabase, ResultSet, SQLiteDatabase, StatementErrorCallback, Transaction } from 'react-native-sqlite-storage';
import {createTables, inserts, dropTables} from '../query/createTable';
const database_name = 'tuquypac.db';
const database_version = '1.0';
const database_displayname = 'SQLite Test Database';
const database_size = 200000;

class Database {
  db: SQLiteDatabase | null = null;
  constructor () {
    this.db = openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size,
      () => { console.log('OPEN database'); },
      (error: string) => { console.log('Error database', error); },
    )
  }

  getQuery<T>(query: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
      this.db?.transaction((txn: Transaction) => {
        txn.executeSql(query, [], (tx: Transaction, res: ResultSet) => {
          resolve(res.rows.raw());
        }, (e) => {
          console.log(e);
          reject(e);
        })
      },
      (e) => {
        console.log(e);
        reject(e);
      });
    });
  }

  populateDB () {
    return new Promise((resolve, reject) => {
      this.db?.transaction((txn: any) => {
        [...dropTables, ...createTables, ...inserts].forEach(query => {
          txn.executeSql(query);
        })
        txn.executeSql("SELECT * FROM MedicalGroup", [], (tx: Transaction, res: ResultSet) => {
          resolve(res);
        }, (e: string) => {
          console.log(e);
          reject(e);
        })
      },
      (e) => { console.log(e); });
    });
  }
  
  getDB() {
    return this.db;
  }
}

export default new Database();
