import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            showDropDown: false
        }
    }

    toggleDropdown=()=>{
        this.setState({showDropdown: !this.state.showDropdown})
    }
    render(){
        return(
            <body>

            <header>
                <nav id='start'>Start Boostrap</nav>
                <nav id='desktop-nav'>
                    <a>SERVICES </a>
                    <a>PORTFOLIO </a>
                    <a>ABOUT </a>
                    <a>TEAM </a>
                    <a>CONTACT </a>
                </nav>
                <nav id='mobile-nav' onClick={this.toggleDropdown}>
                    MENU
                </nav>
                {this.state.showDropdown ?
                (<div id='dropdown'>
                    <span>SERVICES</span>
                    <span>PORTFOLIO</span>
                    <span>ABOUT</span>
                    <span>TEAM</span>
                    <span>CONTACT</span>
                </div>)
                : null}
            </header>
            <div id='main'>
            <img src='https://blackrockdigital.github.io/startbootstrap-agency/img/header-bg.jpg' alt='star'/>
            <div id='main-words'>
                <div id='welcome'>Welcome To Our Studio!</div>
                <div id='nice'>IT'S NICE TO MEET YOU</div>
                <button id='tell'>TELL ME MORE</button>
            </div>
            </div>
                </body>
        
        )
    }
}

export default Header;