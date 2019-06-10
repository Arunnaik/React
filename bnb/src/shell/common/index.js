import React from 'react';
import './common.scss';
export const  Header =(props)=>{
    return(
        <div style={props.styles} className='header'>

              <p>{props.header||'Header'}</p>

        </div>
    )
} 