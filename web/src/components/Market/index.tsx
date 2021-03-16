import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setShopMapSelected, setMapCenter } from '../../store/modules/shop/actions';
import { ListItem } from './styles';

const Market = ({ market }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { marketMapSelected } = useSelector(state => state.shop);
  const setSelectedMarket = () => {
    dispatch(setShopMapSelected(market._id));
    dispatch(setMapCenter(market.location));
  }

  useEffect(() => {
    if(marketMapSelected === market._id) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [marketMapSelected, market._id]);
  return(
    <ListItem
      isActive={isActive}
      className="d-inline-block"
      onClick={() => setSelectedMarket()}
    >
      <div className="d-inline-block">
        <img
          src={market.logo}
          className="img-fluid"/>
      </div>
      <div className="d-inline-block pl-3 align-bottom">
        <b>{market.name}</b>
        <div className="market-infos">
          <span className="mdi mdi-star"></span>
          <text>
            <b>2,8</b>
          </text>
          <span className="mdi mdi-cash-usd-outline"></span>
          <text>$$$</text>
          <span className="mdi mdi-crosshairs-gps"></span>
          <text>2,9km</text>
        </div>

        <label className="badge badge-primary">Frete Grátis</label>
      </div>

    </ListItem>
  );
}

export default Market;
