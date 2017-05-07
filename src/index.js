import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro/Intro';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer'
import Work from './Work/Work'
import './index.css';

ReactDOM.render( < div >
	    < Intro / >
	    < Portfolio / >
	    < Footer / >
	    < Work / >
    < /div>,
    document.getElementById('root')
);
