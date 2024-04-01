import css from "./SearchBox.module.css";
export const SearchBox = ({ setQuery }) => {
  
 
    const handleInput = e => {
        const inputValue = e.currentTarget.value
        setQuery(inputValue)
    }
    return (
        <div className={css.box}>
            <p className={css.p}>Find contacts by name</p>
            <input type="text" onChange={handleInput} className={css.input} />
        </div>
    )
}