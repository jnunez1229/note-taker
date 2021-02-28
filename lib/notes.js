const fs = require('fs');
const path = require('path');


function createNewNote(body, db) {
  const note = body;
  
  // add new note into array
  db.push(note);

  // update db.json
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify( db , null, 2)
  );
  return note;
}

function deleteNote(db, id){
  // matches param id w/ db id 
  for(let i = 0; i < db.length; i++){
    if(db[i].id === id){
      // delete data
        db.splice(i, 1)
    }
  }
  // update db.json
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify( db , null, 2)
  )

  return db

}


module.exports = {
  createNewNote,
  deleteNote
};
