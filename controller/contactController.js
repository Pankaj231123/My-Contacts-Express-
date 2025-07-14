//@desc get all contacts
//@route GET /api/contacts
//access the public
const getContact = (req,res)=>{
    res.status(200).json({message : "Get all contacts."});
};

//@desc create a contact
//@route Post /api/contacts
//access the public
const createContact = (req,res)=>{
    console.log("The request bidy is:", req.body);
    res.status(201).json({message : "Created the contacts."});
};


//@desc get individual contacts
//@route GET /api/contacts/:id
//access the public
const getContacts = (req,res)=>{
    res.status(200).json({message : `Get contacts for ${req.params.id}`});
}

//@desc update a contact
//@route PUT /api/contacts/:id
//access the public
const updateContact = (req,res)=>{
    res.status(200).json({message : `Update contacts for ${req.params.id}`});
}


//@desc delete a contact
//@route Delete /api/contacts/:id
//access the public
const deleteContact = (req,res)=>{
    res.status(200).json({message : `Deleted contacts for ${req.params.id}`});
}
module.exports = {getContact, createContact, getContacts, updateContact, deleteContact};