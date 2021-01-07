import './MapRender.css';
import { connect } from 'react-redux';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

function MapRender(props) {
    return (
        <>
            {props.loc &&
                <div className="map-container">
                    <MapContainer
                        center={props.loc}
                        zoom={13}
                        zoomControl={false}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.loc}>
                        </Marker>
                    </MapContainer>
                </div>}

        </>
    );
}

function mapStateToProps(state) {
    const location = state.ipInfo.info.location;
    if (location) {
        return { loc: [location.lat, location.lng] };
    } else {
        return {};
    }
}

export default connect(mapStateToProps, null)(MapRender);