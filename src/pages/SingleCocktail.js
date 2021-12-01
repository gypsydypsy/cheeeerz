import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import SimilarCocktails from '../components/SimilarCocktails'
import { FaGlassWhiskey, FaBookmark } from 'react-icons/fa'
import LikeButton from '../components/LikeButton'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

    const  { id } = useParams();

    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState(null)

    useEffect( () => {
        setLoading(true)
        const getCocktail = async () => {
            try {
                const response = await fetch(`${url}${id}`)
                const data = await response.json()

                if(data.drinks){
                    const { 
                        strDrink:name, 
                        strDrinkThumb:image, 
                        strAlcoholic:info, 
                        strCategory:category, 
                        strGlass:glass,
                        strInstructions:instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                        strIngredient6,
                        strIngredient7,
                        strIngredient8,
                        strIngredient9,
                        strIngredient10,
                        strMeasure1,
                        strMeasure2,
                        strMeasure3,
                        strMeasure4,
                        strMeasure5,
                        strMeasure6,
                        strMeasure7,
                        strMeasure8,
                        strMeasure9,
                        strMeasure10
                    } = data.drinks[0]

                    const ingredients = [
                        {name: strIngredient1, measure: strMeasure1},
                        {name: strIngredient2, measure: strMeasure2},
                        {name: strIngredient3, measure: strMeasure3},
                        {name: strIngredient4, measure: strMeasure4},
                        {name: strIngredient5, measure: strMeasure5},
                        {name: strIngredient6, measure: strMeasure6},
                        {name: strIngredient7, measure: strMeasure7},
                        {name: strIngredient8, measure: strMeasure8},
                        {name: strIngredient9, measure: strMeasure9},
                        {name: strIngredient10, measure: strMeasure10}
                    ]

                    const newCocktail = {
                        name,
                        image,
                        info, 
                        category,
                        glass,
                        instructions, 
                        ingredients
                    }

                    setCocktail(newCocktail)
                }
                else {
                    setCocktail(null)
                }
                setLoading(false)
            }
            catch(error) {
                console.log(error);
                setLoading(false)
            }
        }
        getCocktail()
    }, [id])

    if (loading){
        return (
            <div className='page-container'>
                <Loading />
            </div>
        )
    }
    
    if(!cocktail){
        return <h2>No cocktail to display</h2>
    }

    const {name, image, category, info,  glass, instructions, ingredients } = cocktail

    return (
        <div className='page-container'>
            <section className='recipe'>
                <img src={image} alt={name} />
                <div className='recipe-content'>
                    <h2>{name}</h2>
                    <div>
                        <h3>Ingredients</h3>
                        <ul>
                            {ingredients.map((ing, index) => {
                                return ing.name && <li key={index}>{ing.measure} {ing.name}</li>
                            })}
                        </ul>
                    </div>
                    <div>
                        <h3>Instructions </h3>
                        <p>{instructions}</p>
                    </div>
                    <div className='recipe-info'>
                        <p><FaBookmark />{category} - {info}</p>
                        <p><FaGlassWhiskey />Best served in <strong>{glass}</strong></p>
                    </div>
                    <div className='like-container'>
                        <p>Add to favorites</p>
                        <LikeButton id={id} />
                    </div>
                </div>
            </section>
            <SimilarCocktails ingredient={ingredients[0].name} id={id}/>
        </div>
    )
}

export default SingleCocktail
