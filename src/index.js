import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro/Intro';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer'
import './index.css';

ReactDOM.render( < div >
	    < Intro / >
	    < Portfolio / >
	    < Footer />
    < /div>,
    document.getElementById('root')
);
