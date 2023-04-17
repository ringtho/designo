import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapCard = (props) => {
    return (
        <section className="about-hero map-details-container">
            <MapContainer 
                className="map-leaflet" 
                center={[props.long, props.lat]} 
                zoom={16} 
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[props.long, props.lat]}>
                    <Popup>
                    {props.address1} <br /> {props.address2},  
                    <br /> {props.country}
                    </Popup>
                </Marker>
            </MapContainer>
            <div className="about-descriptions contacts-card-container">
                <div className="about-descriptions-wrapper">
                    <div className="about-description-content contacts-card-content">
                        <h2>{props.country}</h2>
                        <div className="location-contact-details">
                            <div className="location-container">
                                <h4>{props.office}</h4>
                                <p>{props.address1}</p>
                                <p>{props.address2}</p>
                            </div>
                            <div className="location-header">
                                <h4>Contact</h4>
                                <p>P : {props.phone}</p>
                                <p>M : {props.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MapCard