import { MapContainer } from './styles';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../MapMarker';

const Map = () => {
  return(
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={{
          lat: -23.561684,
          lng: -46.625378
        }}
        defaultZoom={15}
      >
        <MapMarker lat={-23.561684} lng={-46.625378}/>
      </GoogleMapReact>
    </MapContainer>
  );
}

export default Map;