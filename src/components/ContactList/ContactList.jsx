import { Contact } from "../Contact/Contact";

import css from "./ContactList.module.css";
export const ContactList = ({ contacts, onDelete }) => {
      return (
        <ul className={css.container}>
              {contacts.map((contact) => {
                  return <li key={contact.id} className={css.box}><Contact contact={contact} onDelete={onDelete} /></li>
              })}
                
        </ul>
    )
}