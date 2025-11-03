import React from 'react'

function Displayexpense({expensedetails,seteexpensedetsils}) {
  const edelete=(ename)=>{
    
   seteexpensedetsils({expense:expensedetails.expense.filter((item)=>item.ename!=ename)});
   alert("updated")
   
  }

  return (
    <div className='container'>
        <table className="table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>amount</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                
                {
                 expensedetails.expense.map((item,index)=>(
                    <tr key={index}>
                    <td>{item.ename}</td>
                    <td>{item.eamount}</td>
                    <td>
                        <button className='btn btn-primary' onClick={()=>edelete(item.ename)}>delete</button>
                        </td>
                </tr>
               
                 ))
                 
                }
                                  

                
            </tbody>
        </table>
        <div>
            total={expensedetails.expense && expensedetails.expense.map((item)=>Number(item.eamount)).reduce((prev,curr)=>prev+curr,0)}
        </div>
    </div>
  )
}

export default Displayexpense