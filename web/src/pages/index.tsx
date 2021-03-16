import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestMarkets } from '../store/modules/shop/actions';
import Header from '../components/Header';
import Map from '../components/Map';
import Market from '../components/Market';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { markets } = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(requestMarkets());
  }, []);

  return (
    <div className="h-100">
      <Header/>
      <div className="container-fluid market-list-container">
        <div className="col-12 px-4 text-center">
          <h5>Mais próximos de você (5)</h5>
        </div>

        <ul className="col-12 market-list">
          {markets.map(market => <Market market={market} />)}
        </ul>
      </div>

      <Map markets={markets}/>
    </div>
  )
}

export default Home;
