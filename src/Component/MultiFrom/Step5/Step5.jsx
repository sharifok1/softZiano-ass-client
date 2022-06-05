import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const Step5 = () => {
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
    const newData = {...preData, note:data.note}
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
     console.log(items.to, items.note)
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
                <p>Note</p> <br />
                <textarea className='note-input' type='text' {...register("note")} 
                style={{backgroundColor:'transparent'}}
                value={items.note}
                defaultValue={`
,'"" ./\\=?!:;
 "",""a"",""b""
ヲンヰヱヴーヾ・
ｧｰｭｿﾏﾞﾟ
㌶Ⅲ⑳㏾☎㈱髙﨑
¢£¬‖−〜―
<script>alert('Bug!!!');</script>
&lt;&copy;&amp;
జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
జ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞాజ్ఞా
§¦ЙЁКД§∪§¦ЙЁКД§
t҉̠̩̰͔͇͔͓̤͕̪̱̗̖̳̭͒̊̓̆̂͌̐̿̎̈́͂̓̇̆e҉͉̤̣̤͕̙̖͓͍͇̤͔͎̦̗̣͎͓̖̫͂̌̿͂͐̈̽̋͛̈̀̂́̂̐̽̂̓̇̆̅͗ͅx҉̰̤̰͉͕̪̙͖̭̜̪͎̮̗̞͇̞̫̬̝̲͈̔́̔͋̿̆̒̋͗͋̀͌͋̈́͂̃̒ͅt̸͚͖͙̮̘̥̯̞͈̲͚̱͚́͒̐̾̋͋̔̓̉̋̈́̉͗̌͑́͌̉̀͂̂͂̌"				
                
                
                
                     `}/> 
                
                <br /> <br />
            </form>
            </div>
              <div className='btn-next-back'>
              <NavLink className='back' to = "/step4">Back</NavLink>
              <NavLink to = "/step6"><button onClick={()=>saveData()} className='next' >next</button></NavLink> 
              </div>
        </div>
        </div>
        </div>
        </div>
    );
};

export default Step5;