import { useContext } from 'react';
import { SidebarContext } from '../../context/Sidebar';
import { Container } from './styles';
import Link from 'next/link';

interface HeaderProps {
  hasCart?: boolean;
}

const Header = ({ hasCart }: HeaderProps) => {
  const { openCart } = useContext(SidebarContext);
  return(
    <Container className="bg-light">
      <header className="py-2 px-2 text-center">
        <Link href="/">
          <img src="/logo-full.svg" alt="Vendex"/>
        </Link>
      </header>
      {hasCart && (
        <button
          onClick={() => openCart()}
          className="btn btn-secondary cart-button">
          <span className="mdi mdi-cart"></span>
          2 items
        </button>
      )}
    </Container>
  );
}

export default Header;
