import { useEffect, useState } from 'react'
import Cocktail from '../components/Cocktail'
import { useGlobalContext } from "../context";
import Loading from '../components/Loading'
import { FaHeart } from 'react-icons/fa'
import RandomCocktail from '../components/RandomCocktail';
import { Link } from 'react-router-dom'

const LikedCocktails = () => {

    const { favorites } = useGlobalContext();
    const [loading, setLoading] = useState(false);
    const [likedDrinks, setLikedDrinks] = useState([])

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
    
    
    useEffect ( () => {
        setLoading(true)
        if (favorites.length > 0){
            favorites.map( async (id) => {
                try {
                    setLikedDrinks([])
                    const res = await fetch(`${url}${id}`)
                    const data = await res.json();
                    
                    const { idDrink, strDrink, strDrinkThumb, strGlass, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10 } = data.drinks[0]
        
                    let ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10]
        
                    ingredients = ingredients.filter( ing => ing != null);
        
                    const newDrink = 
                        {
                            id: idDrink, 
                            name: strDrink, 
                            image: strDrinkThumb,
                            glass: strGlass,
                            nbIng: ingredients.length
                        }
        
                    setLikedDrinks(likedDrinks => [...likedDrinks, newDrink])
                    setLoading(false)
                }
                catch(error) {
                    console.log(error)
                    setLoading(false)
                }
            })
        }
        else {
            setLikedDrinks([])
            setLoading(false)
        }
    }, [favorites])

    return (
        <section className='page-container liked-cocktails'>
            <h2> <FaHeart /> You added {favorites.length} cocktails to your list</h2>
            <div className='list' >
                {loading ? 
                    <Loading />
                    :likedDrinks.length > 0 ?
                        likedDrinks.map (cocktail => {
                            return <Cocktail key= {cocktail.id} cocktail = {cocktail} />
                        })
                        : <div className='no-cocktail'>
                             <p>Oops... it looks like you have no cocktail in your list. Why don't you start with a random cocktail?</p>
                            <div className='CTA'>
                                <button className='CTA-light'>
                                    <Link to='/'>Back Home</Link>
                                </button>
                                <button className='CTA-dark' >
                                   <RandomCocktail />
                                </button>
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}

export default LikedCocktails