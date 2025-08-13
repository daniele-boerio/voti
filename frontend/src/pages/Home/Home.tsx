import { useLocation } from 'react-router-dom';
import './home.scss';

function Home() {
  const location = useLocation();
  let homeId = location.pathname.split('/').pop();

  return (
    <>
      <p>{homeId}</p>
    </>
  );
}

export default Home;
