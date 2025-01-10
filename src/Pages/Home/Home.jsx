import { Helmet } from 'react-helmet-async';
import Banner from '../../components/Banner/Banner';
import PopularServices from '../../components/PopularServices/PopularServices';
import RecentProject from '../../components/RecentProject/RecentProject';
import Contact from '../../components/Contact/Contact';
import Blog from '../Blog/Blog';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Service-Sharing | Home</title>
      </Helmet>
      <Banner></Banner>
      <PopularServices></PopularServices>
      <RecentProject></RecentProject>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
};

export default Home;
