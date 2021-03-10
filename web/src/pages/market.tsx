import Header from '../components/Header';
import ProductItemCard from '../components/Product/Card';

const Market = () => {
  return(
    <div className="h-100">
      <Header hasCart/>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img
              src="http://vilanova.itashopping.com.br/wp-content/uploads/2020/08/2-2.png"
              className="img-fluid market-image"/>
            <b>San Supermercados</b>
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
          <div className="col-9">
            <h5>Produtos</h5>
            <div className="row">
              {[1,2,3,4,5,6,7,8,9].map(p => <ProductItemCard/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
