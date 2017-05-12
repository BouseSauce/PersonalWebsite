import React from 'react';
import ReactDOM from 'react-dom';
import Intro from './Intro/Intro';
import Portfolio from './Portfolio/Portfolio';
import Footer from './Footer/Footer';
import Work from './Work/Work';
import Contact from './Contact/Contact';
import Nav from './Nav/Nav';
import './index.css';

ReactDOM.render( < div >
	 <Nav/>
	    < Intro className="intro" / >
	    < Portfolio / >
	    < Contact />
	    < Footer / >
	    < Work / >
    < /div>,
    document.getElementById('root')
);
