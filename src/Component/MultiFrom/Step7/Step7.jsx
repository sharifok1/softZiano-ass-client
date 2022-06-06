import React from 'react';

const Step7 = () => {
    const randomNumber = Math.floor(1000000000 + Math.random() * 900000000);
    return (
        <div>
             <div className='appbar'>
                <p>Train Ticket Reservation System</p>
            </div>
            <div className='ContentBody'>
            <div className='ContentArea'>
            <div className='content-wraper'>
            <div className='from-wraper'>
           <div>
            <p> Thank you!</p>		
            <p>Your reservation ID is: {randomNumber}</p> 		
          </div> 
          </div>
          </div>
        </div>
        </div>
        </div>
    );
};

export default Step7;