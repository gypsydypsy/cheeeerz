import Loading from './Loading'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'

const CocktailList = () => {

    const { cocktails, loading } = useGlobalContext();

    if(loading){
        return <Loading />
    }

    if(cocktails.length < 1){
        return <p>No cocktail matched your search</p>
    }

    return (
        <section className='list'>
            {cocktails.map((cocktail) => {
                return <Cocktail key={cocktail.id} cocktail = {cocktail} />
            })}
        </section>
    )
}

export default CocktailList
