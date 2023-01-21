import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            <p>Landing Page</p>
            <Link to="/home">
                <button>Home</button>
            </Link>
        </div>
    )
}

export default LandingPage;