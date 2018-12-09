import React from "react";
import PropTypes from "prop-types";

function FileName({file}) {
    return (
        <React.Fragment>
            <span className="file-name">{file.name}</span>
        </React.Fragment>
    )
}

FileName.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileName;