import React from 'react'
import ReactDOM from 'react-dom'
import { view } from 'react-easy-state';
import Header from './Header';
import SearchBar from './SearchBar'

const Home = view(() => {
    return <>
        <Header title='Safe NPM' grade={null}></Header>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Welcome!</h1>
            <h2>Search for a package here</h2>
            <SearchBar type='home' placeholder='Search'></SearchBar>
            <p>Safe NPM is a tool to help you identify if the packages you are using do what they say.</p>
        </div>
    </>
})

export { Home }