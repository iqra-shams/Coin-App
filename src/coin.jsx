import React from 'react'

const Coin = (props) => {
 
   
    
 return(
  <div > 
  <card  className="tablet:bg-black mobile:bg-red-800 my-8 py-10 hover:w-[94%] flex  justify-center grow hover:grow-0 w-[90%] h-[90%] mx-auto text-center font-medium rounded-xl flex items-center text-white">
   <div className=''>
    <img className="w-10  " src={props.icon}/>
   Name: {props.name} <br></br>
   Symbol: {props.symbol}<br></br>
   Price: {props.price}<br></br>
   </div>
   
    
    
    </card>
  </div>
 )
}

export default Coin;