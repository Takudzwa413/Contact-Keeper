const express = require('express');
const router = express.Router();

// @route  Get api/contacts
//@desc    Get all user contacts
//@ access Private
router.get('/',(req,res)=>{
    res.send('Get all contact');
});

// @route  Post api/contacts
//@desc    Update contacts
//@ access Private
router.post('/',(req,res)=>{
    res.send('Add contact');
});

// @route  PUT api/contacts/:id
//@desc    Update contacts
//@ access Private
router.put('/:id',(req,res)=>{
    res.send('Update contact');
});

// @route  DELETE api/contacts/:id
//@desc    Update contacts
//@ access Private
router.delete('/:id',(req,res)=>{
    res.send('Delete contact');
});

module.exports = router;