import React from 'react';
import ReactDOM from 'react-dom';
import MediaQuery from 'react-responsive';
import './index.css';
//import App from './App';
import PCIndex from './component/pc_index.js';
import MobileIndex from './component/mobile_index.js';
import registerServiceWorker from './registerServiceWorker';

export default class AppIndex extends React.Component {

    render() {
        return(
                <div>
                <MediaQuery query="(min-device-width: 1224px)">
                <PCIndex></PCIndex>
                </MediaQuery>
                <MediaQuery query="(max-device-width: 1224px)">
                <MobileIndex></MobileIndex>
                </MediaQuery>
            </div>
        );
    };
   
}

// 注册组件到哪root节点
ReactDOM.render(<AppIndex />, document.getElementById('root'));
registerServiceWorker();
