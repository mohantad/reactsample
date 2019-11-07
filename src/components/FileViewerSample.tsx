import * as React from 'react';

// import FileViewer from 'react-file-viewer';


// import { CustomErrorComponent } from 'custom-error';
// import logger from 'logging-library';

// import logo from './logo.svg';
import Header from './header';
const FileViewer = require("react-file-viewer");


class FileViewerSample extends React.Component {
private file = './docs/test.ppt';
private type = 'ppt';

// private file = '../docs/Doc1.docx';
// private type = 'docx';

// private file = '../docs/MOHANTA DEEPAK KUMAR MR 09JAN CCU.pdf';
// private type = 'pdf';

public onError(e:any) {
    console.log('error in file-viewer', e);
  }

public render() {
    return (
      <div className="App">
        <Header/>
        <p/>Sample File View 
        <p/>
        <FileViewer
        fileType={this.type}
        filePath={this.file}
        onError={this.onError}
        className='resizable'
        />
        
      </div>
    );
  }
  
}

export default FileViewerSample;
