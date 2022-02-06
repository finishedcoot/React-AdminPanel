import Chart from '../../component/charts/Chart';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import'./home.css';
import {userData} from "../../data/sampleData"
import WidgetSmall from '../../component/widgets/small/WidgetSmall';
import WidgetLarge from '../../component/widgets/large/WidgetLarge';

const Home = () => {
  return <div className='home'>
      <FeaturedInfo/>
      <Chart data={userData} title={'User Analytics'} grid dataKey={"Active User"}/>
      <div className='homeWidgets'>
        <WidgetSmall/>
        <WidgetLarge/>
      </div>
  </div>;
};

export default Home;
