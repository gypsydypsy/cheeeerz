import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Header from '../components/Header'

const Home = () => {
    return (
        <main>
            <Header />
            <div className='page-container'>
                <SearchForm />
                <div className='list-container'>
                    <CocktailList />
                </div>
            </div>
        </main>
    )
}

export default Home
