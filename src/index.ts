import * as ReactDOM from 'react-dom';
import MainComponent from "./react-1/main";
import * as React from "react";

import './angular/main';
import '@angular/common';
import '@angular/core';
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/compiler';
import 'rxjs';
import 'rxjs-compat';
import 'rxjs/operators';

// What does everything need? Yup, you guessed it, say it with me
import 'jquery';
// Because of course it does

import 'bootstrap';

function index() {
    if (!localStorage.getItem('browserId')) {
        localStorage.setItem('browserId', Math.floor(Math.random()*16).toString(16)+Math.floor(Math.random()*16).toString(16)+Math.floor(Math.random()*16).toString(16)+Math.floor(Math.random()*16).toString(16)+Math.floor(Math.random()*16).toString(16)+Math.floor(Math.random()*16).toString(16)+Math.floor(Math.random()*16).toString(16)+Math.floor(Math.random()*16).toString(16))
    }
    let reactContainer: HTMLElement = document.getElementById('react-container');
    ReactDOM.render(React.createElement(MainComponent), reactContainer);
}

addEventListener('load', index);
