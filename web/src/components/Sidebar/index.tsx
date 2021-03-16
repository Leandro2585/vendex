import { useState, useEffect, useContext } from 'react';
import { Container, Background } from './styles';
import Dock from 'react-dock';
import ProductItemList from '../Product/List';
import { SidebarContext } from '../../context/SidebarContext';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const Sidebar = () => {
  const { isOpenCart, closeCart } = useContext(SidebarContext);
  const { cart } = useSelector(state => state.shop)
  const total = cart.reduce((total, product) => {
    return total + product.price;
  }, 0);
  return(
    <>
    {isOpenCart && (
      <Background/>
    )}
    <Container className="container-fluid h-100 pt-4" isVisible={isOpenCart}>
      <span className="mdi mdi-chevron-double-right" onClick={() => closeCart()}></span>
      <h5>Meu carrinho ({cart.length})</h5>
      <div className="row products">
        {cart.map((product) => <ProductItemList product={product}/>)}
      </div>

      <div className="row align-items-end footer">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <b className="d-inline-block">Total</b>
          <h3 className="d-inline-block">R$ {total.toFixed(2)}</h3>
        </div>
        <Link
          href="/checkout"
          className="btn btn-block btn-ls btn-primary rounded-0 h-50 align-items-center">
          Finalizar Compra
        </Link>
      </div>
    </Container>
    </>
  );
}

export default Sidebar;
