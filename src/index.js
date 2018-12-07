import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

function Email({data}) {
    return (
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td>{data.sender}</td>
                        <td>{data.subject}</td>
                        <td>{data.date}</td>
                    </tr>
                    <tr>
                        <td colSpan="3">{data.message}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

Email.propTypes = {
    data: PropTypes.shape({
        sender: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        message: PropTypes.string.isRequired
    }).isRequired
};

var emailData = {
    sender: "AgungDH",
    subject: "Entah apa ini",
    date: "Jun 14",
    message: "Ini apa yaaa... kok aku paok banget -_-"
};

ReactDOM.render(<Email data={emailData}/>,
    document.querySelector("#root"));