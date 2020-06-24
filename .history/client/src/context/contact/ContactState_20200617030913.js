import React ,{useReducer} from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import{
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types';


const ContactState = props =>{
    const initalState ={
        contacts:[
           {
            id:1,   
            name:'Takudzwa vengai',
            email:'tvengai75@gmail.com',
            phone:'112-112-222',
            type:'personal'
           },
           {
            id:2,   
            name:'Shantel chinangwa',
            email:'shantel@gmail.com',
            phone:'333-333-222',
            type:'personal'
           },
           {
            id:3,   
            name:'Maxwell vengai',
            email:'maxwell@gmail.com',
            phone:'222-123-222',
            type:'personal'
           }

        ]
    }
}