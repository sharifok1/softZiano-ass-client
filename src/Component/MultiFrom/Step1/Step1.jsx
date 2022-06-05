import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import '../../Style/Style.css'

const Step1 = () => {
    const [items, setItems] = useState([]);

    // set to local storage///
    const { register, handleSubmit } = useForm();
    const onSubmit = data => setItems(data);
    const saveData = ()=>{
        localStorage.setItem('items', JSON.stringify(items));
    }
// get items from local storage//
    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('items'));
        if (items) {
         setItems(items);
         console.log(items.name)
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
                    <p>Name</p> <br />
                    <input {...register("name")} placeholder="name" defaultValue={items.name} className='input-field'/> <br /> <br />
                    <p>Gender</p>
                      <div style={{marginLeft:'60px'}}>
                           <input {...register("gender")} type="radio" value="Male" checked={items.gender === "Male"? true:false} id='radio1'/> <span><label htmlFor="radio1">Male</label></span> <br />
                           <input {...register("gender")} type="radio" value="Female" checked={items.gender === "Female"? true:false} id='radio2'/> <span> <label htmlFor="radio2">Female</label></span> <br />
                      </div>
                    {/* <input type="submit" /> */}
                </form>
                </div>
                 <div className='btn-next-back'>
                 <NavLink to= ""></NavLink>
                 <NavLink to = "/step2" ><button onClick={()=>saveData()} className='next' >next</button></NavLink>
                 </div>
             </div>
            </div>
           </div>

           
        </div>
    );
};

export default Step1;