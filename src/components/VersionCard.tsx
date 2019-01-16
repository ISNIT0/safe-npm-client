import React from 'react';
import { view , store } from 'react-easy-state';
import Badge from './Badge';
import ReactMarkdown from 'react-markdown';
import './VersionCard.css'

interface VersionCardProps {
    version:string,
    grade:string,
    alignment?:string
    detail?:any
}

class VersionCard extends React.Component<VersionCardProps>{
    truncate = (text:any,maxWords:number) =>{
        var words = text.split(' ')
        
        if( words.length > maxWords){
            return(words.slice(0,maxWords).join(' ')+'...')
        }
        else{
            return(text)
        }
    }
    wouldTruncate = (text:any,maxWords:number) =>{
        var words = text.split(' ')
        return(words.length>maxWords ? true:false)
    }
    render(){
        const wordLimit = 50;
        return(
            <div style={{display:'flex',flexDirection:'column'}}>
                <div className={(this.props.alignment == 'left' ? 'card-header-left':'card-header-right')}>
                    <div style={{margin:'5px',display:'flex'}}>
                        <div style={{marginRight:'15px'}}>ver.{this.props.version}</div>
                        <Badge grade={this.props.grade}/>
                    </div>
                </div>
                <div className={(this.props.alignment == 'left' ? 'card-body-left':'card-body-right')}>
                    <div className='card-body-title'>
                        <h1 style={{textAlign:(this.props.alignment == 'left' ? 'right':'left')}}>{this.props.detail[0] ?'Report Type':'Ungraded'}</h1>
                    </div>
                    <div className={(this.props.alignment == 'left' ? 'card-body-content-left':'card-body-content-right')}>
                        {this.props.detail[0] != undefined &&
                            <div>
                                <div className='links-container'>
                                    <a style={{flexGrow:1}} href="https://www.google.com/">View on Travis</a>
                                    <a href="https://www.google.com/">View report on GitHub</a>
                                </div>
                                <div className='divider'/>
                                <div style={{textAlign:(this.props.alignment == 'left' ? 'right':'left'),fontWeight:'bold'}}>This package was reviewed by "{this.props.detail[0].by}"</div>  
                                {this.props.detail[0].comments != undefined &&
                                    <ReactMarkdown source={this.props.detail[0].comments}/>
                                }
                                {this.wouldTruncate(this.props.detail[0].comments.toString(),wordLimit) &&
                                    <div style={{alignContent:(this.props.alignment == 'left' ? 'flex-end':'flex-start')}}>
                                        <button className='reveal-more'>Read more</button>
                                    </div>
                                }
                                <div className='divider'/>
                                <div style={{textAlign:(this.props.alignment == 'left' ? 'right':'left'),fontStyle:'italic',fontSize:'90%'}}>Reviewed {new Date(this.props.detail[0].date).toLocaleString()}</div>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}


export default view(VersionCard)