import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="home-page">
      <h1>Welcome to AuthApp</h1>
      <p>A simple full-stack authentication starter built with React, Express and MongoDB.</p>

      {!isAuthenticated && (
        <div className="home-cta">
          <Link to="/signup" className="btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary">
            Login
          </Link>
        </div>
      )}

      {isAuthenticated && (
        <Link to="/dashboard" className="btn-primary">
          Go to Dashboard
        </Link>
      )}
    </div>
  );
};

export default Home;
