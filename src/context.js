import React, {useState, useContext, useEffect, useCallback } from 'react'

//Api URL
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext()

const AppProvider = ( {children} ) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('d')
    const [cocktails, setCocktails] = useState([])
    const [favorites, setFavorites] = useState([])

    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            const {drinks} = data;
            
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {idDrink, strDrink, strDrinkThumb, strGlass, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10} = item;
                    
                    let ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10]

                    ingredients = ingredients.filter( ing => ing != null);

                    return {
                        id: idDrink, 
                        name: strDrink, 
                        image: strDrinkThumb, 
                        glass: strGlass,
                        nbIng: ingredients.length
                    }
                })
                setCocktails(newCocktails)
            }
            else {
                setCocktails([])
            }
            setLoading(false)
        }
        catch(error) {
            console.log(error)
            setLoading(false)
        }
    }, [searchTerm] ) 
    
    const getLocalStorage = () => {
        let LS = localStorage.getItem('likedDrinks')
        
        if(LS){
            setFavorites(JSON.parse(LS))
        }
    }

    const updateLocalStorage = useCallback(() => {
        localStorage.setItem('likedDrinks', JSON.stringify(favorites))
    }, [favorites])

    useEffect( () => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks] )
    
    useEffect(() => {
        getLocalStorage();   
    }, [])

    useEffect(() => {
        updateLocalStorage()
    }, [setFavorites, updateLocalStorage])



    return (
        <AppContext.Provider 
            value= {{
                loading, 
                setSearchTerm, 
                cocktails,
                favorites,
                setFavorites 
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }

