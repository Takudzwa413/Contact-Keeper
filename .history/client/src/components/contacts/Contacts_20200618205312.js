import React,{ Fragment,useContext } from 'react';
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {

    const contactContext = useContext(ContactContext);
    const { contacts } = contactContext;
    return (
        <Fragment>
            {contacts.map(contact=> (
               <h2>{contact.name}</h2>))}
        </Fragment>
    )
}
export default Contacts