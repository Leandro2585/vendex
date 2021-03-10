import { Container } from './styles';

const MapMarker = () => {
  return(
    <Container>
      <img src={'/marker.png'} alt="Marker"/>
      <img
        src="http://vilanova.itashopping.com.br/wp-content/uploads/2020/08/2-2.png"
        className="img-fluid img-marker"/>
    </Container>
  );
}
export default MapMarker;