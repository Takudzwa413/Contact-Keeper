import React,{ Fragment,useContext } from 'react';
import ContactContext from '../../context/contact/contactContext'

const Contacts = () => {

    const contactContext = useContext(ContactContext);
    const { Contacts } = contactContext;
    return (
        <Fragment>
            {Contacts.map(contacts=> 
            <h3>{contacts.name}</h3>)}
        </Fragment>
    )
}
export default Contacts