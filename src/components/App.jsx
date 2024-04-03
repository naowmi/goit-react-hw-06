import './App.css'
import css from "./App.module.css"
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";
import { ToastContainer } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
export default function App() {
  return (
<div className={css.container}>
  <h1 className={css.title}>Phonebook</h1>
  <ContactForm />
    <SearchBox />
      <ContactList />
      <ToastContainer/>
</div>
  )
}

