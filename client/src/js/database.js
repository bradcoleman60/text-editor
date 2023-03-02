import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true});
      console.log('jate database created');
    },
  });

// Adds logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  
  // Create a connection and version
  const texteditorDb = await openDB('jate', 1);

  //Create a new transaction 
  const tx = texteditorDb.transaction('jate', 'readwrite');

  //Open up the desired object store
  const store = tx.objectStore('jate');

  //Use .add() method to store and pass content to database
  const request = store.put({id: 1, jate: content});

  //Get confirmation of request
  const result = await request;
  // console.log( 'data saved to the editor database', result);


}
// Adds logic for a method that gets all the content from the database
export const getDb = async () => {
  
  // Create a connection and version
  const texteditorDb = await openDB('jate', 1);
  
  //Create a new transaction 
  const tx = texteditorDb.transaction('jate', 'readonly');

  //Open up the desired object store
  const store = tx.objectStore('jate');

  // Use .get() method to get data from editor database
  const request = await store.get(1);

  return request.jate;

};

//Starts the Database
initdb();
