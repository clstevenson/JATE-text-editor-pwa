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
  // Create a connection to the database database and version we want to use.
  const db = await openDB('jate', 1);

  // add the content to the DB
  const request = db
    .transaction('jate', 'readwrite')
    .objectStore('jate')
    .add({ value: content });

  // Get confirmation of the request.
  const result = await request;
  console.log('Data saved to the database', result);
};

// method that gets all the content from the database
export const getDb = async () => {
  // create a connection to the DB
  const db = await openDB('jate', 1);

  // Get the information from the DB
  const request = db.transaction('jate', 'readonly')
    .objectStore('jate')
    .getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;
};

initdb();
