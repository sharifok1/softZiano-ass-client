import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Step3 = () => {
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
    const newData = {...preData, date:data.date, time:data.time}
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
     console.log(items.date, items.name, items.to, items.time)
    }
  }, []);

    const formatDate = moment().format('YYYY-MM-DD')
    const times = moment().format('HH:MM');
   
    return (
        <div>
             <div className='appbar'>
                <p>Train Ticket Reservation System</p>
            </div>
           <div>
           <div className='ContentBody'>
           <div className='ContentArea'>
           <div className='content-wraper'>
            <div className='from-wraper'>
            <form onChange={handleSubmit(onSubmit)}>
                <p>Date</p> <br />
                <input className='input-field' type='date' {...register("date")} defaultValue={formatDate} value={items.date}/> <br /> <br />
                <p>Time</p> <br />
                <input className='input-field' type='time' {...register("time")} defaultValue={times} value={items.time} /> <br /> <br />
            </form>
            </div>
              <div className='btn-next-back'>
                <NavLink to = "/step2" className='back'>Back</NavLink>
                <NavLink to = "/step4"  onSubmit={handleSubmit(onSubmit)}><button onClick={()=>saveData()} className='next' >next</button></NavLink>
              </div>
            </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Step3;