import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // create object store (ie schema) for the app's data
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // open the DB, returning a promise for an enhanced IDBDatabase
  const db = await openDB('jate', 1);
  // create transaction for the DB and save all the content
  const request = db
    .transaction('jate', 'readwrite')
    .objectStore('jate')
    .add({ value: content });

  // get confirmation of the request
  const result = await request;
  console.log('Saved data', result);
  return result;
}

// method that gets all the content from the database
export const getDb = async () => {
  // open the DB, returning a promise for an enhanced IDBDatabase
  const db = await openDB('jate', 1);
  // create transaction for the DB and request all the data
  const request = db
    .transaction('jate', 'readonly')
    .objectStore('jate')
    .getAll();

  // get confirmation of the request
  const result = await request;
  console.log('Retrieved data', result);
  return result;
}

initdb();
