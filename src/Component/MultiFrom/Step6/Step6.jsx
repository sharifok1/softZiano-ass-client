import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const Step6 = () => {
    const [items, setItems] = useState([]);
    const [road, setRoad]=useState('')
    // const [msg, setMsg]=useState('')
    const [storeData, setStoreData]=useState([])
    // get items from local storage//
useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'));
    if (items) {
     setItems(items);
    }
  }, []);

// check name is already exists
const newName = items.name;

useEffect(()=>{
    const url =  `https://softtrainticket.herokuapp.com/ticketInfo`
    fetch(url)
    .then(res=> res.json())
    .then(data =>  setStoreData(data))
},[])

const sortName = storeData?.find((existsName)=>existsName.name === newName);
    console.log(sortName)
    useEffect(()=>{
        if(sortName){
            setRoad('error')
        }
        else{
            setRoad('success')
        }
    },[sortName])
    
    console.log(road)

const submitHandler = items => {
    const url  = 'https://softtrainticket.herokuapp.com/ticketInfo'
    fetch(url, {
      method:'POST',
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify(items)
    })
    .then(res=>{
      if(res.status === 200){
        alert("Ticke Successfully issued")
        // setMsg('Product successfully added');
        // window.localStorage.clear();
      } 

    })
 window.localStorage.clear();
  }



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
                <p>Name : {items.name}</p>
                <p>Gender: {items.gender}</p> 	
                <p>From: {items.from}</p> 	
                <p>To: {items.to}</p>	
                <p>Date: {items.date}</p>	
                <p>Time: {items.time}</p>		
               <p> Amount: (JPY ¥) {items.amount*1.47}</p>

               <div style={{marginTop:'20px'}}>
               <b>Note</b>	
               </div>
               <p className='note-preview'>
                   {items.note}
               </p>
               
            </div>
            </div>
                <div className='btn-next-back'>
                  <NavLink to = "/step5" className='back'>Back</NavLink>

                  {
                      road === 'success'?
                      <NavLink to = "/step7"><button onClick={()=>submitHandler(items)} className='next' >Submit</button></NavLink>:
                      <NavLink to = "/error"><button className='next' >Submit</button></NavLink>
                  }
                 
                </div>
            </div>
           
        </div>
        </div>
        </div>
    );
};

export default Step6;