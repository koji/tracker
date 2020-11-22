import spinner from './spinner.gif';

export const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loader" />
            <h1>Loading</h1>
        </div>
    )
}
