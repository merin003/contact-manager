import React from 'react';
import spinnerImg from '../../assets/img.gif';

let Spinner = () =>{
    return(
        <React.Fragment>
            <div>
                <img src={spinnerImg} alt=""/>
            </div>
        </React.Fragment>
    )

};
export default Spinner;