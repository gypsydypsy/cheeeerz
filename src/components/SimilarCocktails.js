import { useState, useEffect } from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'

const SimilarCocktails = ({ingredient, id}) => {

    const [loading, setLoading] = useState(false)
    const [similarCocktails, setSimilarCocktails] = useState([])

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

    useEffect( () => {
        setLoading(true)
        const getSimilarDrinks = async () => {
            try {
                const response = await fetch(`${url}${ingredient}`)
                const data = await response.json()
                const {drinks} = data;

                //Removing the compared cocktail
                let filteredDrinks = drinks.filter((drink) => drink.idDrink !== id)

                //Selecting 3 random indexes
                let rand = [];
                let length = filteredDrinks.length;
                let randLength = (length < 8) ? length : 8
                for (let i = 0; i < randLength; i++){
                    let index;
                    do {
                        index = Math.floor(Math.random()*filteredDrinks.length )  
                     } while ((rand.indexOf(index) !== -1));
                     rand.push(index)
                }
                
                const randomSelection = rand.map(index => {
                    return filteredDrinks[index]
                })  

                if (randomSelection.length > 0){
                    const similarDrinks = randomSelection.map((drink) => {
                        return {
                            id : drink.idDrink,
                            name: drink.strDrink,
                            image: drink.strDrinkThumb
                        }
                    })
                setSimilarCocktails(similarDrinks)
                }
                else {
                setSimilarCocktails([])
                }
                setLoading(false)
            }
            catch(error) {
                console.log(error);
                setLoading(false)
            }
        }
        getSimilarDrinks()  
    }, [id, ingredient])

    if (similarCocktails.length < 1){
        return <></>
    }
    
    
    return (
        <section className='similar-cocktails'>
            <h3>Similar cocktails</h3>
            <div className='list'>
                {loading ? 
                    <Loading />
                    : similarCocktails.map((cocktail) => {
                            return <Cocktail key = {cocktail.id} cocktail = {cocktail} />
                    })
                }
            </div>
        </section>
    )
}

export default SimilarCocktails
