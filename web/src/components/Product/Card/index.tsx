import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCartProduct } from '../../../store/modules/shop/actions';

const ProductItemCard = ({ product }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.shop);
  const added = cart.findIndex((p) => p._id === product._id) !== -1;

  return(
    <Container className="col-3">
      <img src={product.cover} className="img-fluid  align-center"/>
      <button
        onClick={() => dispatch(toggleCartProduct(product))}
        className={`btn btn-${added ? 'danger':'primary'} rounded-circle`}
      >{
        added ? '-':'+'
      }</button>
      <h4>
        <label className="badge badge-primary">R$ {product.price.toFixed(2)}</label>
      </h4>
      <small>
        <b>{product.description}</b>
      </small>
    </Container>
  );
}

export default ProductItemCard;
