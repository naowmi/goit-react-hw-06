import { useState, useEffect } from 'react'
import './App.css'
import css from "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import contacts from "./contacts.json";

export default function App() {
const [query, setQuery] = useState("")
  const [contact, setContact] = useState(() => {
    const value = localStorage.getItem("contact");
    if (value !== null) {
      return JSON.parse(value)
    }
    return contacts
  })
  useEffect(() => {
    localStorage.setItem("contact", JSON.stringify(contact));
     }, [contact])
  const filteredContacts = contact.filter(contact => contact.name.toLowerCase().includes(query.toLowerCase()));
  const addContact = (newContact) => {
    setContact(prevContacts => [...prevContacts, newContact])
  }
  const deleteContact = (id) => {
    setContact(prevContacts => prevContacts.filter(contact => contact.id !== id))
  }
  return (
<div className={css.container}>
  <h1 className={css.title}>Phonebook</h1>
  <ContactForm onAddContact={addContact} />
    <SearchBox query={query} setQuery={setQuery}  />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
</div>
  )
}

