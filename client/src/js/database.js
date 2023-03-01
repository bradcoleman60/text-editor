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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.error('putDb not implemented');
  console.log('Post to the database')

  // Create a connection and version
  const texteditorDb = await openDB('editor', 1);
  
  //Create a new transaction 
  const tx = texteditorDb.transaction('editor', 'readwrite');

  //Open up the desired object store
  const store = tx.objectStore('editor');

  //Use .add() method to store and pass content to database
  const request = store.add({content});

  //Get confirmation of request
  const result = await request;
  console.log( 'data saved to the editor database', result);


}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.error('getDb not implemented');
  console.log('get all content from editor database');

  // Create a connection and version
  const texteditorDb = await openDB('editor', 1);
  
  //Create a new transaction 
  const tx = texteditorDb.transaction('editor', 'readonly');

  //Open up the desired object store
  const store = tx.objectStore('editor');

  // Use .getAll() method to get all data from editor database
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log('result.value', result);
  return result;

};

//Starts the Database
initdb();
