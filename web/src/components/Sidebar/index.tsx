import { useState, useEffect, useContext } from 'react';
import { Container, Background } from './styles';
import Dock from 'react-dock';
import ProductItemList from '../Product/List';
import { SidebarContext } from '../../context/Sidebar';

const Sidebar = () => {
  const { isOpenCart, closeCart } = useContext(SidebarContext);
  return(
    <>
    {isOpenCart && (
      <Background/>
    )}
    <Container className="container-fluid h-100 pt-4" isVisible={isOpenCart}>
      <span className="mdi mdi-close" onClick={() => closeCart()}></span>
      <h5>Meu carrinho (5)</h5>
      <div className="row products">
        {[1,2,3,4,5,6,7,8,9,10,11,12,13].map(p => <ProductItemList />)}
      </div>

      <div className="row align-items-end footer">
        <div className="col-12 d-flex justify-content-between align-items-center">
          <b className="d-inline-block">Total</b>
          <h3 className="d-inline-block">R$ 90,00</h3>
        </div>
        <button className="btn btn-block btn-ls btn-primary rounded-0 h-50 align-items-center">Finalizar Compra</button>
      </div>
    </Container>
    </>
  );
}

export default Sidebar;
