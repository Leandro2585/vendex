import { Container } from './styles';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const MapMarker = ({ id, logo}) => {
  const { marketMapSelected } = useSelector(state => state.shop);

  return(
    <Link href="/market/[id]">
      <Container>
        <img
          src={
            marketMapSelected === id
            ? '/marker-selected.png'
            : '/marker.png'
          }
          alt="Marker"
        />
        <img
          src={logo}
          className="img-fluid img-marker"
        />
      </Container>
    </Link>
  );
}
export default MapMarker;
