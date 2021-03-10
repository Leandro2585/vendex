import Header from '../components/Header';
import Map from '../components/Map';
import Market from '../components/Market';

const Home: React.FC = () => {
  return (
    <div className="h-100">
      <Header/>
      <div className="container-fluid market-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>

        <ul className="col-12 market-list">
          {[1,2,3,4,5,6,7,8,9,10,11,12].map(p => <Market />)}
        </ul>
      </div>

      <Map/>
    </div>
  )
}

export default Home;
