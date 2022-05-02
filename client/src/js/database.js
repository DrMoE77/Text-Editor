import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Using the put() function to save data to the database 
export const putDb = async (id, value) => {
  console.log('PUT request to update the jateDB');
  // establishing connection with the db by using openDB
  const jate_Db = await openDB('jate', 1);
  // specifying the transaction to be made
  const tx = jate_Db.transaction('jate', 'readwrite');
  // opening the object store
  const object_store = tx.objectStore('jate');
  // using the put() method to save all the necessary contents
  const req = object_store.put({ id: id, value: value })
  // request to confirm if the data was saved properly
  const res = await req;
  console.log('Data successfully saved!', res);
};

// Using the getAll() function to get data from the database
export const getDb = async (value) => {
  console.log('Getting data from the jateDB');
  // establishing connection with the db by using openDB
  const jate_Db = await openDB('jate', 1);
  // specifying the transaction to be made
  const tx = jate_Db.transaction('jate', 'readwrite');
  // opening the object store
  const object_store = tx.objectStore('jate');
  // using the getAll() method to get all the necessary contents
  const req = object_store.getAll()
  // request to confirm if the data was fetched properly
  const res = await req;
  console.log('Data successfully fetched!', res);
};


initdb();
