import { toggleCartProduct } from '../../../store/modules/shop/actions';
import { useDispatch } from 'react-redux';
import { Container } from './styles.ts';

const ProductItemList = ({ product }) => {

  const dispatch = useDispatch();

  return(
    <Container className="col-12">
      <div className="row">
        <div className="col-3">
          <img className="img-fluid" src={product.cover}/>
        </div>
        <div className="col-6">
          <h6>
            <label className="badge badge-primary">R$ {product.price.toFixed(2)}</label>
          </h6>
          <small>
            <b>{product.name}</b>
          </small>
        </div>
        <div className="col-3">
          <button
            onClick={() => dispatch(toggleCartProduct(product))}
            className="btn btn-danger rounded-circle d-flex align-items-center justify-content-center"
          >-</button>
        </div>
      </div>
    </Container>
  );
}

export default ProductItemList;
