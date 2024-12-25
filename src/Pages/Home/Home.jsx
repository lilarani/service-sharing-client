import Banner from '../../components/Banner/Banner';
import PopularServices from '../../components/PopularServices/PopularServices';
import RecentProject from '../../components/RecentProject/RecentProject';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularServices></PopularServices>

      <RecentProject></RecentProject>
    </div>
  );
};

export default Home;
