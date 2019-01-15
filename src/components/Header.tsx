import React from 'react'
import { view , store } from 'react-easy-state';
import Badge from './Badge'
import SearchBar from './SearchBar'
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom"

interface HeaderProps {
    title:any,
    package?:boolean,
    version?:any,
    grade?:any,
}

class Header extends React.Component<HeaderProps>{
    render(){
        return(
            <div style={{background:'purple', color:'white',height:'18vh',minHeight:'120px'}}>
                <div style={{display:'flex'}}>
                    <div style={{flexGrow:1,margin:'0.5rem'}}>  
                        <Link to='/' style={{display:'flex',alignItems:'center',fontWeight:'bolder',color:'white',textDecoration:'none',width:'100px'}}>
                            <Badge grade='A'/> 
                            <div style={{marginLeft:'0.5rem'}}>SafeNPM</div>
                        </Link>
                    </div>
                    <SearchBar type='header' placeholder='Search for a package'/>
                </div>
                <div style={{display:'flex', alignItems:'flex-end'}}>
                    <a href="https://www.google.com/" style={{flexGrow:1,margin:'0.5rem',color:'white',textDecoration: 'none',width:'150px'}}>{this.props.package == true && "view on GitHub"}</a>
                    <h1 style={{flexGrow:1}}>{this.props.title} {this.props.version} <Badge grade={this.props.grade} height="24" width="21"/></h1>
                    <a href={"https://www.npmjs.com/package/"+this.props.title} style={{margin:'0.5rem',color:'white',textDecoration: 'none',width:'150px',textAlign:'right'}}>{this.props.package == true && "view on NPM"}</a>
                </div>
            </div>
        )
    }
}

export default view(Header)