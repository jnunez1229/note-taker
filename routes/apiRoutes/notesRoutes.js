const router = require('express').Router();
const db = require('../../db/db');
const {nanoid} = require('nanoid')
const{createNewNote, deleteNote} = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(db);
    
})

router.post('/notes', (req, res) => {
    // assign random id
    req.body.id = nanoid();
    
    const note = createNewNote(req.body, db);
    res.json(note);

})

router.delete('/notes/:id', (req, res) =>{
    deleteNote(db, req.params.id);
    res.json(db);
    
} )
module.exports = router;