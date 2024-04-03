import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

const getFilterContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
export const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filter = useSelector(selectNameFilter)
    const getContacts = getFilterContacts(contacts, filter)
      return (
          <ul className={css.container}>
              {contacts.length === 0 && <p>There is no contacts!</p>}
              {getContacts.map((contact) => {
                  return <li key={contact.id} className={css.box}>
                      <Contact contact={contact}/>
                  </li>
              })}
                
        </ul>
    )
}