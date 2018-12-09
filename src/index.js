import React from 'react';
import ReactDOM from 'react-dom';
import FileList from './file-list.js';
import './index.css';

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