import logo from '../img/logo-footer.png'
import {Link} from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTiktok, FaTwitter } from 'react-icons/fa'
import RandomCocktail from './RandomCocktail'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='footer-brand'>
                    <img src={logo} alt='logo'/>
                    <div>
                        <p>Cheeeerz</p>
                        <p>There's a drink for every mood.</p>
                    </div>
                </div>
                <div className='footer-social'>
                    <h4>Follow us</h4>
                    <div>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaTiktok/>
                        <FaTwitter/>
                    </div>
                </div>
                <div className='footer-links'>   
                    <h4>Navigate</h4>
                    <div>
                        <Link to='/about' >About us</Link>
                        <Link to='/favorites'>Favorites drinks</Link>
                        <RandomCocktail/>
                        <a href='https://www.thecocktaildb.com/' target='_blank' rel='noreferrer'>Database</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer