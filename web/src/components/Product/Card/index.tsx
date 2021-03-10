import { Container } from './styles';

const ProductItemCard = () => {
  return(
    <Container className="col-3">
      <img src="/images/pepsi.jpg" className="img-fluid  align-center"/>
      <button className="btn btn-primary rounded-circle">+</button>
      <h4>
        <label className="badge badge-primary">R$ 90,00</label>
      </h4>
      <small>
        <b>Fardo de refrigerante Pepsi </b>
      </small>
    </Container>
  );
}

export default ProductItemCard;
