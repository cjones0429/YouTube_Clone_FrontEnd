import React, { Component } from 'react';
import './searchBar.css'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchQuery: '',
            errors: {
                searchQuery: ''
            }
        }
    }

    handleChange = (e) => {
        let errors = this.state.errors

        switch(e.target.name){
            case 'searchQuery':
                errors.title = e.target.value.length < 1 ? "Search must be at least 1 character" : null;
                break;
        }

        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let searchQuery = this.state.searchQuery;
        this.props.searchForVideo(searchQuery)
    }

    render() { 
        return ( 
            <div className="searchbar">
                <form onSubmit={this.handleSubmit}>
                    <label className= "search-title">Search:</label>
                    <input className="searchbar-input" type="text" name="searchQuery" placeholder="Search for videos here..." value={this.state.searchQuery} onChange={this.handleChange} />
                    {this.state.errors.searchQuery ? <p style={{color:'red'}}>{this.state.errors.searchQuery}</p> : ''}
                    <button className="search-button" type="submit">Search</button>
                </form>
            </div>
        );
    }
}
 
export default SearchBar;