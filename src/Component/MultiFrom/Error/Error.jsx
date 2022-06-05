import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
             <div className='appbar'>
                <p>Train Ticket Reservation System</p>
            </div>
            <div className='ContentBody'>
            <div className='ContentArea'>
            <div className='content-wraper'>
            <div className='from-wraper'>
           <p> Error!!	</p>
           <p> This name already exists.</p>
           </div>
           <NavLink to = "/" className='back'>Back</NavLink>
           </div>
        </div>
        </div>
        </div>
    );
};

export default Error;