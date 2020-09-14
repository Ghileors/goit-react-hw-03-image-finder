import React, { Component } from 'react';

export default class SearchBar extends Component {
    state = { query: '' };

    handleChange = event => {
        this.setState({ query: event.currentTarget.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.query);

        this.setState({ query: '' });
    };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label"></span>
                    </button>
                    <input
                        className="SearchForm-input"
                        value={this.state.query}
                        onChange={this.handleChange}
                        type="text"
                        autoComplete="on"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    }
}
