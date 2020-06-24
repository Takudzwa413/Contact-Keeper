import React ,{  useReducer } from 'react';
// import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'


const ContactState = props =>{
    const initialState = {
        contacts :[
            {
                id:1,
                name:'Takudzwa Vengai',
                email:'tvengai75@gmail.com',
                phone:'222-222-333-333',
                type:'personal'
            },
            {
                id:2,
                name:'Peter John',
                email:'tfvengai75@gmail.com',
                phone:'222-222-333-333',
                type:'professional'
            },
            {
                id:3,
                name:'Mary Susan',
                email:'takavengai75@gmail.com',
                phone:'222-222-333-333',
                type:'personal'
            }
        ]
    }
    const [state,dispatch] = useReducer(contactReducer , initialState);

    //Add Contact

    const addContact = contact => {
        contact.id = uuid.v4();
        dispatch({type: ADD_CONTACT, payload: contact});
    }

    //delete contact

    //set current contact

    //clear current contact

    //update contact


    //filter contact


    //clear filter

    return(
        <ContactContext.Provider
        value={{
            contacts:state.contacts
        }}>
            {props.children}

        </ContactContext.Provider>
    )

}

export default ContactState;