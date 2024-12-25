import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import PopularServices from '../../components/PopularServices/PopularServices';
import RecentProject from '../../components/RecentProject/RecentProject';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Service-Sharing | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularServices></PopularServices>

      <RecentProject></RecentProject>
    </div>
  );
};

export default Home;
