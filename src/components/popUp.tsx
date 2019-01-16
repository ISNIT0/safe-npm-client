import React from 'react';
import { view , store } from 'react-easy-state';
import './popUp.css';

interface PopUpProps {
    open:boolean,
    title:string,
    content:string,
    markup?:boolean
}

class PopUp extends React.Component<PopUpProps>{
    render(){
        return(
            <>{this.props.open === true &&
                <>
                    <div className='card'>
                        <div style={{margin:'1rem'}}>
                            <h1>{this.props.title}</h1>
                            <div>{this.props.content}</div>
                            <div>Footer</div>
                        </div>
                    </div>
                    <div className='background'/>
                </>
            }</>
        )
    }
}


export default view(PopUp)