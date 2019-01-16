import React from 'react';
import { view , store } from 'react-easy-state';
import Badge from './Badge';
import ReactMarkdown from 'react-markdown';

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
        var markdown:string = this.props.detail[0].comments.toString()
        const wordLimit = 50;
        return(
            <>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',borderRadius: '5px 5px 0px 0px',background:'purple',color:'white',maxWidth:'200px',display:'flex',alignSelf:(this.props.alignment == 'left' ? 'flex-end':'flex-start')}}>
                        <div style={{margin:'5px',display:'flex'}}>
                            <div style={{marginRight:'15px'}}>ver.{this.props.version}</div>
                            <Badge grade={this.props.grade}/>
                        </div>
                    </div>
                    <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',borderRadius: '0px 0px 15px 15px',background:'white',color:'black',minWidth:'300px',maxWidth:'600px',alignSelf:(this.props.alignment == 'left' ? 'flex-end':'flex-start')}}>
                        <div style={{background:'purple',color:'white',width:'100%',height:'10%'}}>
                            <h1 style={{margin:'10px',marginTop:'0px',textAlign:(this.props.alignment == 'left' ? 'right':'left')}}>{this.props.detail[0] ?'Report Type':'Ungraded'}</h1>
                        </div>
                        <div style={{margin:'12px',display:'flex',flexDirection:'column',alignItems:(this.props.alignment == 'left' ? 'flex-end':'flex-start')}}>
                            {this.props.detail[0] != undefined &&
                                <div>
                                    <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
                                        <a style={{flexGrow:1}} href="https://www.google.com/">View on Travis</a>
                                        <a href="https://www.google.com/">View report on GitHub</a>
                                    </div>
                                    <div style={{height:'1px',width:'100%',background:'grey',marginTop:'5px',marginBottom:'5px'}}/>
                                    <div style={{textAlign:(this.props.alignment == 'left' ? 'right':'left'),fontWeight:'bold'}}>This package was reviewed by "{this.props.detail[0].by}"</div>  
                                    {this.props.detail[0].comments != undefined &&
                                        <ReactMarkdown source={this.props.detail[0].comments}/>
                                    }
                                    {
                                        //<ReactMarkdown source={this.truncate(this.props.detail[0].comments.toString(),wordLimit)}/>
                                    }
                                    {this.wouldTruncate(this.props.detail[0].comments.toString(),wordLimit) &&
                                        <div style={{textAlign:(this.props.alignment == 'left' ? 'right':'left')}}>
                                            <button onClick={()=>console.log('clicky')} style={{cursor:'pointer',background:'none',border:'none',textDecoration:'underline'}}>Read more</button>
                                        </div>
                                    }
                                    <div style={{height:'1px',width:'100%',background:'grey',marginTop:'5px',marginBottom:'5px'}}/>
                                    <div style={{textAlign:(this.props.alignment == 'left' ? 'right':'left'),fontStyle:'italic',fontSize:'90%'}}>Reviewed {new Date(this.props.detail[0].date).toLocaleString()}</div>
                                </div>
                            }
                            
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default view(VersionCard)