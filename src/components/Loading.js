import Loader from "react-loader-spinner";


const Loading = () => {
    return (
        <div className='loader'>
            <Loader
                type="ThreeDots" 
                color="#ed4e66" 
                height={80} 
                width={80} 
                timeout={100000} 
            />
        </div>
    )
}

export default Loading
