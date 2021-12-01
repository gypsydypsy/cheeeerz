import { Link } from 'react-router-dom'
import { FaBookOpen, FaGlassWhiskey } from 'react-icons/fa'
import LikeButton from './LikeButton'

const Cocktail = ({cocktail}) => {
    return (
        <article className='card'> 
            <Link to={`/cocktail/${cocktail.id}`}>
                <img src={cocktail.image} alt={cocktail.name}/>
                <div className='card-info'>
                    <h4>{cocktail.name}</h4>
                    {cocktail.nbIng && 
                        <p><FaBookOpen /> {cocktail.nbIng} ingredients</p> }
                    {cocktail.glass && 
                        <p><FaGlassWhiskey />{cocktail.glass}</p> }
                </div>
            </Link>
            <LikeButton id={cocktail.id} />
        </article>
    )
}

export default Cocktail
