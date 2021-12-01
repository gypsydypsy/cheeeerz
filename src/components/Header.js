import RandomCocktail from "./RandomCocktail"

const Header = () => {
    return (
        <header className='hero'>
           <div className='container'>
               <div className='hero-text'>
                    <h2>A drink for every mood.</h2>
                    <p>Wether it's for a party or a chill day at home, don't wait more time to test your bar tender skills!
                        Amongst our 600 cocktail recipes, we're sure that you'll find one to your liking.
                    </p>
                    <div className='CTA'>
                        <button className='CTA-light'>
                            <a href='/#search'>search </a>
                        </button>
                        <button className='CTA-dark'>
                            <RandomCocktail />
                        </button>
                    </div>
               </div>
           </div>
        </header>
    )
}

export default Header