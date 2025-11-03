import React, { useState } from 'react'
import Displayexpense from './Displayexpense';
import { useRef } from 'react';

function Userinput() {
    const [expensedetails,seteexpensedetsils]=useState(
        {
               expense:[]
        }
    )
  const enameref= React.useRef()
  const eamountref=React.useRef();
  const addexpense=(ename,eamount)=>{
    const newexpense={ename,eamount}
    seteexpensedetsils({expense:[...expensedetails.expense,newexpense]});
    enameref.current.value=''
    eamountref.current.value=''
  }
  console.log(expensedetails)
  return (
    <div>
        <div className="row">
          <div className='col-md-5'>
            <input   type="text" className='form-control px-3' id='ename' placeholder="expense name" ref={enameref}/>
          </div>
          
          <div className='col-md-5'>
            <input value={expensedetails.eamount} type='number' className='form-control' id="eamount"placeholder="expense amount" ref={eamountref} />
            
          </div>
          <div className="col-md-2"><button className='btn btn-primary' onClick={()=>addexpense(enameref.current.value,eamountref.current.value)}>add</button></div>
            </div>
       
        {
          expensedetails.expense&&
          <Displayexpense expensedetails={expensedetails} seteexpensedetsils={seteexpensedetsils} />

        }
    </div>
  )
}

export default Userinput