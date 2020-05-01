import React from 'react';
import styled from 'styled-components';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const PropertyCard = props => {
    const property = props.property;
    const address = property.address.split(" ").join("+");
    const city = property.city.split(" ").join("+");
    const state = property.state;
    const zip = property.zip;
    const mapAddress = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDmv-m5Y408TUhS4VUYYYTdijnHex9eoiI&q=${address},${city},${state},${zip}`;

    return (
        <CardContainer>
            <FaEdit /><FaTrashAlt />
            <TextContainer>
                <p style={{ marginBottom: "-10px" }}><b>Address</b>: {property.address}</p>
                <p style={{ marginBottom: "-10px" }}><b>City</b>: {property.city}</p>
                <p style={{ marginBottom: "-10px" }}><b>State</b>: {property.state}</p>
                <p><b>Zip Code</b>: {property.zip}</p>
            </TextContainer>
            <MapContainer>
                <iframe
                    title="map1"
                    width="300"
                    height="450"
                    frameBorder="0"
                    src={mapAddress}
                    allowFullScreen
                />
            </MapContainer>
        </CardContainer>
    )
}

export default PropertyCard;

const CardContainer = styled.div`
    width: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    border-radius: 5px;
    border: 2px solid #eee;
    margin-right: 20px;
`;

const TextContainer = styled.div`
    text-align: left;
    margin-left: 10px;
`;

const MapContainer = styled.div`
`;
