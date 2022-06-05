// import { isDisabled } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Step2 = () => {
    const { register, handleSubmit } = useForm();
    const [preData, setPreData] = useState([]);
    const [items, setItems] = useState([]);
    const [formValue, setFormValue] = useState("");

// get previous data//
useEffect(() => {
    const preData = JSON.parse(localStorage.getItem('items'));
    if (preData) {
        setPreData(preData);
    }
  }, []);

// new data//
  const onSubmit = data =>{
    const newData = {...preData, from:data.from, to:data.to}
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
     console.log(items.from, items.name, items.to)
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
               <p>From</p>

                <select onChange={(e)=>setFormValue(e.target.value)} {...register("from")} className="select-field" value={items.from}>
                    <option value="">Plese Select the Location</option>
                    <option value="東京">東京</option>
                    <option value="横浜">横浜</option>
                    <option value="名古屋">名古屋</option>
                    <option value="大阪">大阪</option>
                </select>

               <p style={{marginTop:'20px'}}>To</p>
                <select {...register("to")} className="select-field" value={items.to}>
                     <option value="">Plese Select the Location</option>
                     <option value="東京" disabled = {formValue === "東京"? true:false }>東京</option>
                    <option value="横浜" disabled = {formValue === "横浜"? true:false }>横浜</option>
                    <option value="名古屋" disabled = {formValue === "名古屋"? true:false }>名古屋</option>
                    <option value="大阪" disabled = {formValue === "大阪"? true:false }>大阪</option>
                </select>
            </form>
            </div>
               <div className='btn-next-back'>
               <NavLink to = "/" className='back'>Back</NavLink>
                <NavLink to = "/step3"><button onClick={()=>saveData()} className='next' >next</button></NavLink>
               </div>
            </div>
            </div>
            </div>
        </div>

    );
};

export default Step2;