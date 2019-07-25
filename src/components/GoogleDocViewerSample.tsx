import * as React from 'react';
// import GoogleDocsViewer from 'react-google-docs-viewer';


// import { CustomErrorComponent } from 'custom-error';
// import logger from 'logging-library';

// import logo from './logo.svg';
import Header from './header';
const GoogleDocsViewer = require('react-google-docs-viewer');


class GoogleDocViewerSample extends React.Component {
// private file = '../docs/passport 1.jpg';

// private file = '../docs/Doc1.docx';
// private type = 'docx';

private file = '../docs/MOHANTA DEEPAK KUMAR MR 09JAN CCU.pdf';
// private type = 'pdf';

public onError(e:any) {
    console.log(e);
  }

public render() {
    return (
      <div className='App'>
        <Header/>
        <p/>Sample File View 
        <p/>
        <GoogleDocsViewer
          width='600px'
          height='780px'
          fileUrl={this.file}
        />
        
      </div>
    );
  }
  
}

export default GoogleDocViewerSample;
