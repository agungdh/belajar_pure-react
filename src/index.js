import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import './index.css';
import Time from './time';

function FileIcon({file}) {
    let icon = 'fa-file-text-o';
    if (file.type === 'folder') {
        icon = 'fa-folder';
    }

    return (
        <span className="file-icon">
            <i className={`fa ${icon}`}/>
        </span>
    )
}

FileIcon.propTypes = {
    file: PropTypes.object.isRequired
};

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

const FileList = ({files}) => (
    <table className="file-list">
        <tbody>
            {files.map(file => (
                <FileListItem key={file.id} file={file}/>
            ))}
        </tbody>
    </table>
);

FileList.propTypes = {
    files: PropTypes.array.isRequired
};

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

const CommitMessage = ({commit}) => (
    <span className="commit-message">
        {commit.message}
    </span>
);

CommitMessage.propTypes = {
    commit: PropTypes.object.isRequired
};
const testFiles = [
    {
        id: 1,
        name: 'src',
        type: 'folder',
        update_at: '2016-07-11 21:24:00',
        latestCommit: {
            message: 'Initial Commit'
        }
    },{
        id: 2,
        name: 'tests',
        type: 'folder',
        update_at: '2016-07-11 21:24:00',
        latestCommit: {
            message: 'Initial Commit'
        }
    },{
        id: 3,
        name: 'README',
        type: 'file',
        update_at: '2016-07-11 21:24:00',
        latestCommit: {
            message: 'Added a readme'
        }
    }
];

ReactDOM.render(
    <FileList files={testFiles}/>,
    document.querySelector('#root')
);