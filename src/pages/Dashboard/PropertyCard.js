import React from 'react';
import { Link } from "react-router-dom"
import styled from 'styled-components';

const PropertyCard = props => {
    const property = props.property;
    const address = property.address.split(" ").join("+");
    const city = property.city.split(" ").join("+");
    const state = property.state;
    const zip = property.zip;
    const mapAddress = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDmv-m5Y408TUhS4VUYYYTdijnHex9eoiI&q=${address},${city},${state},${zip}`;

    return (
        <CardContainer>
            <TextContainer>
                <p style={{ marginBottom: "-10px" }}><b>Address</b>: {property.address}</p>
                <p style={{ marginBottom: "-10px" }}><b>City</b>: {property.city}</p>
                <p style={{ marginBottom: "-10px" }}><b>State</b>: {property.state}</p>
                <p><b>Zip Code</b>: {property.zip}</p>
                <Button><Link to={`/property/${property.id}`} style={{ textDecoration: 'none', color: 'white' }}>Contracts and Payments Info</Link></Button>
            </TextContainer>
            <MapContainer>
                <iframe
                    title="map1"
                    width="300"
                    height="225"
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 1px solid black;
    margin: 20px 0 0 10px;
    padding-left: 20px;
    border: 1px solid #eee; 
    background-color: #eee;
    border-radius: 5px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: center;
    margin-right: 20px;
`;

const MapContainer = styled.div`
    margin-left: 20px;
`;

const Button = styled.button`
    color: white;
    background-color: #4690eb;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    font-size: medium;
    font-weight: 700;
`;