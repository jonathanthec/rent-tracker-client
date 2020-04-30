import React from 'react';
import PropertyCard from './PropertyCard';
import styled from 'styled-components';

const PropertyList = props => {
    const properties = props.properties.getProperties;

    return (
        <CardsContainer>
            {properties.map(property =>
                <PropertyCard property={property} key={property.id} />
            )}
        </CardsContainer>
    )
}

export default PropertyList;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`