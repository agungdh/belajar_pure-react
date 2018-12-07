import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

function Envelope({data}) {
    return (
        <div>
            <AddressLabel data={data.dari}/>
            <hr/>
            <AddressLabel data={data.untuk}/>
            <hr/>
            <Stamp hash={data.hash}/>
        </div>
    )
}

Envelope.propTypes = {
    data: PropTypes.object.isRequired
}

function Stamp({hash}) {
    var url = `https://www.gravatar.com/avatar/${hash}`;
    return (
        <img src={url}/>
    );
}

Stamp.propTypes = {
    hash: PropTypes.string
};

function AddressLabel({data}) {
    return (
        <div>
            <p>{data.nama}</p>
            <p>{data.alamat1}</p>
            <p>{data.alamat2}</p>
        </div>
    )
};

AddressLabel.propTypes = {
    data: PropTypes.shape({
        nama: PropTypes.string.isRequired,
        alamat1: PropTypes.string.isRequired,
        alamat2: PropTypes.string.isRequired
    }).isRequired
};

var dataUtama = {
    dari: {
        nama: "Agung Sapto Margono Dh",
        alamat1: "Nunggalrejo, Punggur, Lampung Tengah",
        alamat2: "Lampung, Indonesia"
    },
    untuk: {
        nama: "Sanji Kok Der",
        alamat1: "Jogja 123",
        alamat2: "Gak Tau Dimana"
    },
    hash: '12345'
}

ReactDOM.render(<Envelope data={dataUtama}/>,
    document.querySelector("#root"));