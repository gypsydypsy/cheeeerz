import { useGlobalContext } from "../context"
import { useRef } from 'react'
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {

    const { setSearchTerm, cocktails } = useGlobalContext();
    
    const searchValue = useRef('')

    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
        document.getElementById('results').style.display = 'block';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className='search-form' id='search'>
            <h3>Trending cocktails</h3> 
            <form onSubmit={handleSubmit}>
                <div className='input-container'>
                    <FaSearch />    
                    <input type='text' placeholder='Mojito, Iced coffee...' ref={searchValue} onChange={searchCocktail}/>
                </div>
                <p id='results' style={{display: 'none'}}>{cocktails.length} results</p>
            </form>
            
        </section>
    )
}

export default SearchForm