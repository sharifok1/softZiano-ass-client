import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Step4 = () => {
    const { register, handleSubmit } = useForm();
    const [preData, setPreData] = useState([]);
    const [items, setItems] = useState([]);

// get previous data//
useEffect(() => {
    const preData = JSON.parse(localStorage.getItem('items'));
    if (preData) {
        setPreData(preData);
    }
  }, []);

// new data//
  const onSubmit = data =>{
    const newData = {...preData, amount:data.amount}
    setItems(newData)
  };

  console.log(items)

  //clear old data and set new data to local storage///
  const saveData = ()=>{
      window.localStorage.clear();
      localStorage.setItem('items', JSON.stringify(items));
  }

// get items from local storage//
useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setItems(items);
     console.log(items.date, items.name, items.to, items.amount)
    }
  }, []);

    return (
        <div>
             <div className='appbar'>
                <p>Train Ticket Reservation System</p>
            </div>
            <div className='ContentBody'>
            <div className='ContentArea'>
            <div className='content-wraper'>
            <div className='from-wraper'>
            <form onChange={handleSubmit(onSubmit)}>
                <p>Amount BDT</p> <br />
                <p className='taka-sym'>৳</p>
                <input type='Number' {...register("amount")} 
                className='input-field amaount'  
              placeholder="Amount"
              inputProps={{
                maxLength: 8,
                step: '.01'
              }}
            //   variant="outlined" 
                
                
                /> <br /> <br />
            </form>
            </div>
              <div className='btn-next-back'>
              <NavLink to = "/step3" className="back">Back</NavLink>
             <NavLink to = "/step5" ><button onClick={()=>saveData()} className='next' >next</button></NavLink>
              </div>
             </div>
             </div>
        </div>
        </div>
    );
};

export default Step4;