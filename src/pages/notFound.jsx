import { Link } from 'react-router-dom';

function notFound() {
    return (
        <div className='notFoundContent'>
            <h1>Error: 404</h1>
            <h2>Page Not Found</h2>
            <h1>¯\_(ツ)_/¯</h1>
            <br />
            <br />
            <Link className='goHome' to='/'>Back Home</Link>
        </div>
    );
}

export default notFound;