import Coin from './coin.jsx';
import React,{ useEffect }  from 'react';
import axios from 'axios';
import './App.css';
import { useState } from 'react';

function App() {
  const [coindata,setCoindata]= useState([]);
  const [searchWord, setSearchWord] = useState("");
  

  const [currentpage, setCurrentpage]=useState(1);
  const recordsperpage = 6;
  const lindex= currentpage* recordsperpage;
  const findex= lindex - recordsperpage;
  const records= coindata.slice(findex,lindex);
  const npage = Math.ceil(coindata.length/recordsperpage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  useEffect(()=>{

    axios.get("https://api.coinstats.app/public/v1/coins ").then((response)=>{
  
     setCoindata(response.data.coins);
  
    console.log(response.data.coins);
    // console.log({srhcoin},"fdfgd");
     
    })
   
    },[])
    // const filterdata = (e) => {
    //   setUpdateddata(e.target.value);
    // const result = coindata.filter(data =>
    //   data.name === updateddata,);

    // console.log(result, "rtyrty");
    // }


const filteredCoins = records.filter((coin)=> {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });
    
  return (
    <>
   
  
    <div className="bg-black text-white font-bold text-3xl flex justify-evenly py-5">
      <div><h1 className='text-white '>List of Coin</h1></div> 
      <input
        type="text"
        className=" h-8 font-normal text-base rounded-full px-3 w-80 tablet:w-150"
        placeholder="Search coin..."
        value={searchWord}
        onChange={(e) => {
          setSearchWord(e.target.value);
         
        }}
      />
    
     
    </div>
    <div className="my-5  tablet:grid grid-cols-2  ">
    { filteredCoins.slice().map((data,i)=>{
      return(
         <Coin key={i} icon={data.icon} name={data.name}  symbol={data.symbol} price={data.price} />
      )
    })
  }
  
    </div>
   <nav >
    <ul className='pagination flex flex-row justify-center gap-4'>
      <li className='page-item'>
        <a href='#' className='page-link' onClick={perpage}>Prev</a>
      </li>
      {

        numbers.map((n,i)=>(
          <li className={`page-item ${currentpage=== n? 'active' : ''}  `} key={i}>
            <a href='#' className='page-link' onClick={()=>changeCpage(n)}>{n}</a>
          </li>
        ))
      }
      <li className='page-item'>
        <a href='#' className='page-link' onClick={nextpage}>Next</a>
      </li>
    </ul>
   </nav>
   
   
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
