import { Link } from 'react-router-dom'
import logo from '../img/logo.png'
import RandomCocktail from './RandomCocktail'
import { useState} from 'react';
import { FaBars, FaTimes, FaWindowMaximize } from 'react-icons/fa';

const Navbar = () => {

    const [isScrolling, setIsScrolling] = useState(false)
    const [isOpened, setIsOpened] = useState(false);

    const handleScroll = () => {
        const pos = window.scrollY;
        if (pos > 0 ){
            setIsScrolling(true)
        }
        else {
            setIsScrolling(false)
        }
    }

    const toggleMobMenu = () => {
        setIsOpened(!isOpened)
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => setIsOpened(false))

    return (
    <nav id='nav' className= {isScrolling ? 'navbar navbar-scroll' : 'navbar' } >
        <div className='container'>
            <div className='logo'>
                    <Link to='/'>
                        <img src={logo} alt='logo' />
                    </Link>
                    <h1>Cheeeerz</h1>
            </div>
            <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                    <li>
                        <RandomCocktail />
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
            </ul>
            <div id='burger'>
                {isOpened ?
                    <FaTimes onClick={toggleMobMenu} />
                    : <FaBars onClick={toggleMobMenu}/>

                }
            </div>
            <ul onClick={()=> setIsOpened(false)} style= {{ display: isOpened ? 'flex' : 'none' }}className='mob-menu'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                    </li>
                    <li>
                        <RandomCocktail />
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar
