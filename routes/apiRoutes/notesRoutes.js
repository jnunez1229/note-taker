const router = require('express').Router();
const db = require('../../db/db');
const nanoid = require('nanoid')
const{createNewNote, validateNote} = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(db);
    
})

router.post('/notes', (req, res) => {
    // assign random id
    req.body.id = nanoid.urlAlphabet;
    
    const note = createNewNote(req.body, db);
    res.json(note);
    console.log(note)
    

})
module.exports = router;