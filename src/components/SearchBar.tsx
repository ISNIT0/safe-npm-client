import React from 'react'
import { view, store } from 'react-easy-state';
import { Redirect } from "react-router-dom"
import './Searchbar.css';

interface SearchProps {
    type: string,
    placeholder?: string
}

interface SearchState {
    searchValue?: string,
    redirect?: boolean
}

const state = store<SearchState>({})

class SearchBar extends React.Component<SearchProps>{
    checkSubmit = (ev: any) => {
        if (ev && ev.keyCode === 13) {
            state.redirect = true;
        }
    }

    onChange = (ev: any) => {
        state.searchValue = ev.target.value
        console.log(state.searchValue)
    }
    render() {
        if (state.redirect === true) {
            const searchValue = state.searchValue
            state.searchValue = ''
            state.redirect = false
            return <><Redirect to={'/package/' + searchValue}></Redirect></>
        }
        return (
            <>
                <input
                    className={this.props.type}
                    value={state.searchValue}
                    onChange={this.onChange}
                    onKeyPress={() => this.checkSubmit(event)}
                    placeholder={this.props.placeholder}
                />
            </>
        )
    }
}

export default view(SearchBar)