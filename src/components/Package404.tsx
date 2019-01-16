import React from 'react'
import ReactDOM from 'react-dom'
import { view } from 'react-easy-state';
import Header from './Header';
import SearchBar from './SearchBar'

const Package404 = view(() => {
    return <>
        <Header title='Safe NPM' grade={null}></Header>
        <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <h1>Sorry that package does not exist!</h1>
            <h2>Search for a package here</h2>
            <SearchBar type='home' placeholder='Search'></SearchBar>
        </div>
    </>
})

export { Package404 }