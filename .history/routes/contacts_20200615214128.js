const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {check,validationResult} = require("express-validator");

const User = require('../models/User');
const Contact = require('../models/Contact');




// @route  Get api/contacts
//@desc    Get all user contacts
//@ access Private
router.get('/',auth,async(req,res)=>{
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        console.error(err. message)
        res.status(500).send('Server error');
        
    }
});

// @route  Post api/contacts
//@desc    Update contacts
//@ access Private
router.post('/',[auth ,[
    check('name','Name is required').not() .isEmpty()
]],(req,res)=>{

}
   
);

// @route  PUT api/contacts/:id
//@desc    Update contacts
//@ access Private
router.put('/:id',auth, async(req,res)=>{
    const { name , email, phone,type  }= req.body;

    //build constact object
    const contactFields ={};
    if (name) contactFields.name = name;
    if (email) contactFields.name = email;
    if (phone) contactFields.name = phone;
    if (type) contactFields.name = type;

    try {
        let contact = await Contact.findById(req.params.id);
        if(!contact) return res.status(404).json({msg: 'Contact not found '});

        //make sure user owns contact
        if (contacts.user.toString() !== req.user.id){
            return res.status(401).json({msg: 'Not authorized'});
        }

        contact = await Contact.findByIdAndUpdate(req.params.id,
            {$set:contactFields},
            {new: true}
            );


    } catch (err) {
        console.error(er.message)
        res.status(500).send('Server Error');
    }
});

// @route  DELETE api/contacts/:id
//@desc    Update contacts
//@ access Private
router.delete('/:id',(req,res)=>{
    res.send('Delete contact');
});

module.exports = router;