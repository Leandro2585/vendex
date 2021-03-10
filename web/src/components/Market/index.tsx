import { ListItem } from './styles';

const Market = () => {
  return(
    <ListItem className="d-inline-block">
      <div className="d-inline-block">
        <img
          src="http://vilanova.itashopping.com.br/wp-content/uploads/2020/08/2-2.png"
          className="img-fluid"/>
      </div>
      <div className="d-inline-block pl-3 align-bottom">
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
      
    </ListItem>
  );
}

export default Market;