# text-editor

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)

Deployed Application: 
https://young-beyond-05615.herokuapp.com/


# **Description**

The goal of this project was to create a text editor that runs in the browser. The app is a single-page application that meets the PWA criteria. Additionally, it features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. This application also functions offline.

To build this text editor, I started with an existing application and implemented methods for getting and storing data to an IndexedDB database. I used a package called idb, which is a lightweight wrapper around the IndexedDB API. 

This application is deployed through Heroku using the Heroku Deployment Guide.

# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  This is the code that interacts with IndexedDB (idb), a database that sits on the client side.  Using this database the text that is entered into the editor is saved through a PUT function.  Important to note is that the database only has one record that is updated through this PUT function.  As one can see, the GET function only gets one record and that record has an ID of "1".  

```
// Adds logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // console.error('putDb not implemented');
  console.log('Post to the database')

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
  console.log( 'data saved to the editor database', result);


}
// Adds logic for a method that gets all the content from the database
export const getDb = async () => {
  // console.error('getDb not implemented', error);
  console.log('get all content from editor database');

  // Create a connection and version
  const texteditorDb = await openDB('jate', 1);
  
  //Create a new transaction 
  const tx = texteditorDb.transaction('jate', 'readonly');

  //Open up the desired object store
  const store = tx.objectStore('jate');

  // Use .getAll() method to get all data from editor database
  const request = store.get(1);
  
  // Get confirmation of the request.
  const result = await request;
  return result;

};

```

# **Testing** 

To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. WHEN I open my application in my editor THEN I should see a client server folder structure. |**Completed**.  Works as intended.   |
|2. WHEN I run `npm run start` from the root directory THEN I find that my application should start up the backend and serve the client   |**Completed**.  Works as intended.     |
|3. WHEN I run the text editor application from my terminal THEN I find that my JavaScript files have been bundled using webpack |**Completed**.  Works as intended.   |
|4. WHEN I run my webpack plugins THEN I find that I have a generated HTML file, service worker, and a manifest file   |**Completed**.  Works as intended.     |
|5. WHEN I use next-gen JavaScript in my application THEN I find that the text editor still functions in the browser without errors|**Completed**.  Works as intended.    |
|6. WHEN I open the text editor THEN I find that IndexedDB has immediately created a database storage |**Completed**.  Works as intended.     |
|7. WHEN I enter content and subsequently click off of the DOM window THEN I find that the content in the text editor has been saved with IndexedDB|**Completed**.  Works as intended.      |
|8. WHEN I reopen the text editor after closing it THEN I find that the content in the text editor has been retrieved from our IndexedDB|**Completed**.  Works as intended.    |
|9. WHEN I click on the Install button THEN I download my web application as an icon on my desktop|**Completed**.  Works as intended.   |
|10. WHEN I load my web application THEN I should have a registered service worker using workbox|**Completed**.  Works as intended.    |
|11. WHEN I register a service worker THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets|**Completed**.  Works as intended.    |
|12. WHEN I deploy to Heroku THEN I should have proper build scripts for a webpack application|**Completed**.  Works as intended.   |



# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 


| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |


# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.