import React from 'react'
import { view , store } from 'react-easy-state';
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom"
import './Searchbar.css';

interface SearchProps {
    type:string,
    placeholder?:string
}

interface SearchState {
    searchValue?: string,
    redirect?: boolean
}

const state = store<SearchState>({})

class SearchBar extends React.Component<SearchProps>{
    checkSubmit = (e:any) => {
        if(e && e.keyCode == 13) {
            state.redirect = true;
        }
    }

    onChange = (e:any) => {
        state.searchValue = e.target.value
        console.log(state.searchValue)
    }
    render(){
        return(
            <>
                {state.redirect === true &&
                    <>
                        <Redirect to={'/package/'+state.searchValue}></Redirect>
                        {state.redirect = false}
                        {state.searchValue = ''}
                    </>
                }
                <input className={this.props.type} value={state.searchValue} onChange={this.onChange} onKeyPress={()=>this.checkSubmit(event)} placeholder={this.props.placeholder}></input>
            </>
        )
    }
}

export default view(SearchBar)