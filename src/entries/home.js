import React from 'react';
import ReactDOM from 'react-dom';

import Home from '../pages/home';

import data from '../api.json';

const container = document.getElementById('app');

ReactDOM.render(<Home data={data} />, container);
