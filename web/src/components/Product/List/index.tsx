import { Container } from './styles.ts';

const ProductItemList = () => {
  return(
    <Container className="col-12">
      <div className="row">
        <div className="col-3">
          <img className="img-fluid" src="/images/fandangos.jpg"/>
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ 30,00</label>
          </h6>
          <small>
            <b>Fandangos</b>
          </small>
        </div>
        <div className="col-3">
          <button className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center">-</button>
        </div>
      </div>
    </Container>
  );
}

export default ProductItemList;
