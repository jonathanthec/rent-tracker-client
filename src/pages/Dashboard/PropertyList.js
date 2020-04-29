import React from 'react';
import MaterialTable from 'material-table';

const PropertyList = props => {
    const properties = props.properties;
    console.log(properties);

    return (
        <div>
            <MaterialTable
                title=""
                data={properties}
                columns={[
                    { id: 'ID', field: 'id' }
                ]}
            />
        </div>
    )
}

export default PropertyList;

//     < iframe
// title = "map1"
// width = "600"
// height = "450"
// frameborder = "0"
// src = "https://www.google.com/maps/embed/v1/place?key=AIzaSyDmv-m5Y408TUhS4VUYYYTdijnHex9eoiI&q=11340+166th+St,Cerritos,CA"
// allowfullscreen
//     />