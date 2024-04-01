import css from "./Contact.module.css"
import { FaPhone } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
export const Contact = ({ onDelete, contact: { name, number, id } }) => {
    const handleContactDelete = (id) => {
        onDelete(id)  
   }
    return (
    <div className={css.container}>
            <div className={css.box}>
                <IoPerson className={css.person}/>
                <FaPhone className={css.phone} />        
            <p className={css.p}>{ name }</p>
            <p className={css.p}>{number}</p>
        </div> 
    <button className={css.button} onClick={() => handleContactDelete(id)}>delete</button>
    </div>
    )

}