import { MapContainer } from './styles';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import MapMarker from '../MapMarker';

const Map = ({ markets }) => {
  const { mapCenter } = useSelector(state => state.shop);
  return(
    <MapContainer>
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        center={mapCenter}
        defaultZoom={15}
      >
        {markets.map(market => (
          <MapMarker
            logo={market.logo}
            id={market._id}
            lat={market.location.lat}
            lng={market.location.lng}
          />
        ))}
      </GoogleMapReact>
    </MapContainer>
  );
}

export default Map;
