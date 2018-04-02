import React from 'react';
import mobileIcon from '../images/if_news_37113.png';
import '../css/mobile/mobile.css';

export default class MobileHeader extends React.Component {

    render() {
        return(
            <div id="mobileheader">
                <header>
                <img src={mobileIcon} alt="logo" />
                <span>ReactNews</span>
                </header>
                </div>
        );
    };

}
