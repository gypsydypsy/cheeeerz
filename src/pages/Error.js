import { Link } from "react-router-dom"

const Error = () => {
    return (
        <section className='error-page'>
           <div className='container'>
                <div className='error-content'>
                    <h2>404, you're lost!</h2>
                    <p>Slow down on the cocktails, it's time to come back home.</p>
                    <button class='CTA CTA-dark'>
                        <Link to='/'>
                            Back Home
                        </Link>
                    </button>
                </div>
           </div>
        </section>
    )
}

export default Error
