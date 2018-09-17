import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Table from './components/Table';
import Form from './components/Form';

import rootReducer from './reducers/rootReducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><Table /></Provider>, document.getElementById('table'));
ReactDOM.render(<Provider store={store}><Form /></Provider>, document.getElementById('form'));
registerServiceWorker();
