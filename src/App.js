import Coin from './coin.jsx';
import React,{ useEffect }  from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';
import Loader from './assets/my-loader.svg';

function App() {

  const [coindata,setCoindata]= useState([]);
  const [searchWord, setSearchWord] = useState("");
  const[loading,setLoading]= useState(true);

  const [currentpage, setCurrentpage]=useState(1);
  const recordsperpage = 6;
  const lindex= currentpage* recordsperpage;
  const findex= lindex - recordsperpage;
  const records= coindata.slice(findex,lindex);
  const npage = Math.ceil(coindata.length/recordsperpage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  useEffect(()=>{

    axios.get("https://api.coinstats.app/public/v1/coins ").then((response)=>{
      setLoading(false);
     setCoindata(response.data.coins)
    
    });
   
   console.log(loading);
    },[]);

const filteredCoins = records.filter((coin)=> {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
    
  return (
    <>
   
  
    <div className="bg-black h-6   text-2xl flex justify-evenly items-center py-5">
      <div><h1 className='text-white font-lg '>List of Coin</h1></div> 
      <input
        type="text"
        className=" h-5 font-normal text-base rounded-full px-3 w-60 "
        placeholder="Search coin..."
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
         
        }}
      />
    
     
    </div>


   <div className="mt-5  flex justify-center flex-wrap">
  {filteredCoins.slice().map((data,i)=>{
      return(
         <Coin key={i} icon={data.icon} name={data.name}  symbol={data.symbol} price={data.price} />
      )
    })}
  
    </div> 
    {/* pagination */}
  <div>
    
    {loading? 
   <div className='flex justify-center'> <img  src={Loader} alt='loader' /></div> :
    <nav className='my-20 py-10'>

    <ul className='pagination flex flex-row justify-center text-black gap-4  '>
      <li className='border-2 border-[#AE8625] bg-black text-white w-10 flex justify-center'>
        <a href='#' className='page-link' onClick={perpage}>Prev</a>
      </li>
      {

        numbers.map((n,i)=>(
          <li className={`bg-white w-7 h-7 border-2 border-[#AE8625] flex justify-center  ${currentpage=== n? 'active' : ''}  `} key={i}>
            <a href='#' className='page-link' onClick={()=>changeCpage(n)}>{n}</a>
          </li>
        ))
      }
      <li className='border-2 border-[#AE8625] bg-black text-white w-10 flex justify-center'>
        <a href='#' className='page-link' onClick={nextpage}>Next</a>
      </li>
    </ul>
   </nav> }
   
   
   </div>
   
    </>
  )
  function perpage(){
    if(currentpage!==1){
      setCurrentpage(currentpage-1)
    }
  }
function changeCpage(id){
  setCurrentpage(id)
}
function nextpage(){
  if(currentpage!==npage){
    setCurrentpage(currentpage+1)
  }
 
} 

}

export default App;
