import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';

var cardInfo = {
    name: "Agung Sapto Margono Dh",
    expiredDate: "09/19",
    creditCardNumber: {
        full: "1234 5678 1234 3452",
        short: "1234"
    },
    bankName: "Bank Bank Tut"
};

function CreditCard({cardInfo}) {
    return (
        <div>
            <p className="bankName">{cardInfo.bankName}</p>
            <p className="cc_full">{cardInfo.creditCardNumber.full}</p>
            <p className="cc_short">{cardInfo.creditCardNumber.short}</p>
            <p className="validThru">Valid Thru</p>
            <p className="expiredDate">{cardInfo.expiredDate}</p>
            <p className="name">{cardInfo.name}</p>
        </div>
    )
};

CreditCard.propTypes = {
    cardInfo: PropTypes.shape({
        bankName: PropTypes.string.isRequired,
        creditCardNumber: PropTypes.shape({
            full: PropTypes.string.isRequired,
            short: PropTypes.string.isRequired
        }).isRequired,
        expiredDate: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    })
};

ReactDOM.render(<CreditCard cardInfo={cardInfo}/>,
    document.querySelector("#root"));