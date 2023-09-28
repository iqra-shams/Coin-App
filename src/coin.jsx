import React from 'react'

const Coin = (props) => {
 
   
    
 return(
  <div > 
  <card  className="tablet:bg-black mobile:bg-red-800 m-5  w-96 h-40 flex justify-center items-center    text-center font-small rounded-xl text-white transition all 0.3s ease  hover:scale-110 ">
   <div className='flex flex-col items-center '>
    <img className="w-8  " src={props.icon}/>
   Name: {props.name} <br></br>
   Symbol: {props.symbol}<br></br>
   Price: {props.price}<br></br>
   </div>
   
    
    
    </card>
  </div>
 )
}

export default Coin;