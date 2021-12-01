import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RandomCocktail = () => {

    const [randomId, setRandomId] = useState(null);
    
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'

    const getRandomId = () => {
        try {
            const getRandomDrink = async () => {
                const res = await fetch(url);
                const data = await res.json();
                const id = data.drinks[0].idDrink;

                if (id){
                    setRandomId(id);
                }
                else {
                    setRandomId(null)
                }
            }
            getRandomDrink();
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect (() => {
        getRandomId()
    }, [])

    const handleClick = () => { 
        getRandomId();
    }

    return (
        <Link onClick= {handleClick} to={`/cocktail/${randomId}`} >
            Random Cocktail
        </Link>
    )
}

export default RandomCocktail