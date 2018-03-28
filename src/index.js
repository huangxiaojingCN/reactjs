import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import PCIndex from './component/pc_index.js';
import registerServiceWorker from './registerServiceWorker';

// 注册组件到哪root节点
ReactDOM.render(<PCIndex />, document.getElementById('root'));
registerServiceWorker();
