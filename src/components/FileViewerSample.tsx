import * as React from 'react';
// import FileViewer from 'react-file-viewer';


// import { CustomErrorComponent } from 'custom-error';
// import logger from 'logging-library';

// import logo from './logo.svg';
import Header from './header';
const FileViewer = require("react-file-viewer");


class FileViewerSample extends React.Component {
private file = '../docs/passport 1.jpg';
private type = 'jpg';

// private file = '../docs/Doc1.docx';
// private type = 'docx';

// private file = '../docs/MOHANTA DEEPAK KUMAR MR 09JAN CCU.pdf';
// private type = 'pdf';

public onError(e:any) {
    console.log(e);
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
        // errorComponent={CustomErrorComponent}
        onError={this.onError}
        />
        
      </div>
    );
  }
  
}

export default FileViewerSample;
