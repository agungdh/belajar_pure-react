import React from "react";
import PropTypes from "prop-types";
import Time from "./time";
import FileName from "./file-name";
import FileIcon from "./file-icon";
import CommitMessage from "./commit-message";

const FileListItem = ({file}) => (
    <tr className="file-list-item">
        <td><FileIcon file={file}/></td>
        <td><FileName file={file}/></td>
        <td><CommitMessage commit={file.latestCommit}/></td>
        <td><Time time={file.update_at}/></td>
    </tr>
);

FileListItem.propTypes = {
    file: PropTypes.object.isRequired
};

export default FileListItem;