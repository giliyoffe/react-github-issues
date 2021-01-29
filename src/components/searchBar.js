import React, { Component } from "react";

/** filter func onKeyUp */

const inputTextTry1 = document.forms[0].input;
inputTextTry1.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        console.log(term);
    })﻿

class searchBar extends Component {
    state = {
        searchText: "Write text for search here..." // maybe dont need state   :/  //from the input this.setState({ searchText: this.value })
    };

    filterSearch = (inputTxt) => {
        inputTxt=''
        // const regex = '/[A-Z]/g';
        const regex = '/[A-Z]/g';

        const found = inputTxt.match(regex);
        return found;
        // or - return paragraph.match(regex);
    }

    render() {
        const { searchText } = this.state;

        if (!searchText || !searchText.length) {
            return <div className="loader">Searching...</div>;
        }

        return (
            <div>
                <div className="searchBar">
                    <input className="searchBar" onKeyup={this.filterSearch(this.value)} />
                     {/* {...console.log(this.value)} */}
                </div>
                <div className="searchResultTemp">

                </div>
            </div>
        );
    }
}

export default searchBar;
