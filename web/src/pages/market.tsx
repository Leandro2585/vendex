import Header from '../components/Header';
import ProductItemCard from '../components/Product/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { requestMarket } from '../store/modules/shop/actions';
const Market = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const { market } = useSelector(state => state.shop);
  useEffect(() => {
    dispatch(requestMarket(id));
  }, []);

  return(
    <div className="h-100">
      <Header hasCart/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src={market.logo}
              className="img-fluid market-image"/>
            <b>{market.name}</b>
            <div className="market-infos">
              <span className="mdi mdi-star"></span>
              <text>
                <b>{market.emphasis}</b>
              </text>
              <span className="mdi mdi-cash-usd-outline"></span>
              <text>{market.category}</text>
              <span className="mdi mdi-crosshairs-gps"></span>
              <text>2,9km</text>
            </div>

            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-9">
            <h5>Produtos</h5>
            <div className="row">
              {market.products?.map(item => <ProductItemCard product={item}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
