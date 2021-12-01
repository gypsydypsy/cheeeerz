import { FaHeart, FaRegHeart } from "react-icons/fa"
import { useGlobalContext } from "../context";

const LikeButton = ({ id }) => {

    const { favorites, setFavorites } = useGlobalContext();

    const likeDrink = () => {
        setFavorites(favorites => [...favorites, id])
    }

    const unlikeDrink = () => {
        setFavorites(favorites.filter(fav => fav !== id))
    }

    if (favorites.includes(id)){
        return (
            <FaHeart  onClick = {unlikeDrink} className='like-button' />
        )
    }

    return (
        <FaRegHeart onClick = {likeDrink} className='like-button' />
    )
}

export default LikeButton

