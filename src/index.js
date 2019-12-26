import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { FacebookButton } from "./facebook-button";
import { TwitterButton } from "./twitter-button";
import { IconBar } from "./icon-bar";

ReactDOM.render(
    <div>
        <FacebookButton /> 
        <TwitterButton />
        <IconBar orientation='vertical' />
    </div>,
    document.getElementById('root')
);

serviceWorker.unregister();