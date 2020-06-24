import React ,{  useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import { 
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
} from '../types'


CONST ContactState = props =>{
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
                name:'Tafadzwa Vengai',
                email:'tfvengai75@gmail.com',
                phone:'222-222-333-333',
                type:'personal'
            },
            {
                id:3,
                name:'Taka Vengai',
                email:'takavengai75@gmail.com',
                phone:'222-222-333-333',
                type:'personal'
            }
        ]
    }
}