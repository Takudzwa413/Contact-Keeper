// import React ,{useReducer, Children} from 'react';
// import uuid from 'uuid';
// import ContactContext from './contactContext';
// import contactReducer from './contactReducer';
// import{
//     ADD_CONTACT,
//     DELETE_CONTACT,
//     SET_CURRENT,
//     CLEAR_CURRENT,
//     UPDATE_CONTACT,
//     FILTER_CONTACTS,
//     CLEAR_FILTER
// } from '../types';


// const ContactState = props =>{
//     const initalState ={
//         contacts:[
//            {
//             id:1,   
//             name:'Takudzwa vengai',
//             email:'tvengai75@gmail.com',
//             phone:'112-112-222',
//             type:'personal'
//            },
//            {
//             "name":"Taku",
//             "email":"taku1@gmail.com",
//             "phone": "333-1111-1111",
//             "type":"professional"
//            },
//            {
//             id:3,   
//             name:'Maxwell vengai',
//             email:'maxwell@gmail.com',
//             phone:'222-123-222',
//             type:'personal'
//            }

//         ]
//     };


//     const[ state, dispatch  ] = useReducer(contactReducer,initalState)


//     //Add contact

//     //Delete contact


//     //set current contact


//     //clear current contact


//     //update contact


//     //filter contact


//     //clear contact

//     return(
//         <ContactContext.Provider
//            value= {{
//                contacts:state.contacts
//            }}
//         >
//             {props.Children}

//         </ContactContext.Provider>
//     );

// };
// export default ContactState;