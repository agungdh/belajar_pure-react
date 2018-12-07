import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';

function Poster({data}) {
    return (
        <div className="itemSemua">
            <div className="abuAbuSemua">
                <img src={data.imgUrl} alt="ini gambar react"/>
            </div>
            <div className="title">{data.title}</div>
            <div className="subTitle">{data.subTitle}</div>
        </div>
    )
};

Poster.propTypes = {
    data: PropTypes.shape({
        imgUrl: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired
    }).isRequired
};

var dataPoster = {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    title: "REACT",
    subTitle: "The best thing since jQuery, probably"
};

ReactDOM.render(<Poster data={dataPoster}/>,
    document.querySelector("#root"));