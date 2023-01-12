import React, { useEffect, useState } from 'react';
import logo from './hanoilogo.jpg'
import './components/tower.css';
import Tower from './components/tower';
import About from './components/about';
import Swal from 'sweetalert2'
import Load from './components/load';

type Props={
  towers:number
}
function App() {
  const[towers,setTowers]=useState([[1,2,3],[],[]])
  const [numberofrings,setNumberofrings]=useState<any>([])
  const [numberofring,setNumberofring]=useState<any>([])
  const[loa,setLoa]=useState<boolean>(true)
  const arr=[[1,2,3],[],[]]
  const newtower:any=[[],[],[]]

  const submit=()=>{
    const len=document.querySelector<HTMLElement>('.towercontainer')!;
    let x = Math.pow(2, numberofring)-1;
    Swal.fire({
      title: 'Good Luck!',
      text: `Min number of moves should be:${x}`,
      imageUrl: 'https://cdn.kastatic.org/ka-perseus-images/5b5fb2670c9a185b2666637461e40c805fcc9ea5.png',
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
        setTowers(newtower)
        if(numberofring>3&&numberofring<10){ 
          for(let i=1;i<=numberofring;i++){
             const arrt =newtower[0].push(i)
          }
         
          
        } else{
          setNumberofrings([1])
              setTowers(arr)
           
        }
       
  }
  const about=()=>{
    const about=document.querySelector<HTMLElement>('.about')!;
    const about2=document.querySelector<HTMLElement>('.about2')!;
    about2.style.display='block';
    about.style.visibility='visible';
    about.style.width='400px';
    about.style.height='86%';

  }
  useEffect(()=>{
setTimeout(()=>{
  setLoa(false)
},6000)
  },[])
 
  
  return (
    <div>{loa==true? <Load/>
      :
    <div className="App">
      <div className='logo'><img src={logo} /></div>
      <h3 className='app2'>Hanoi Towers</h3>
      <div className='app3'><h4 onClick={()=>about()}>What is Hanoi Towers?</h4></div>
      <About/>
     <Tower towers={towers} setTowers={setTowers} numberofrings={numberofrings}/>
     <div className='towerbtn'><button onClick={()=>{setTowers(arr);setNumberofrings([1])}}>restart</button>
     <input type='text'  placeholder='size' onChange={(event:React.ChangeEvent<HTMLInputElement>)=> setNumberofring(event.target.value)} />
     <button onClick={()=>{submit();setNumberofrings(numberofring)}}>Start</button>
     </div>
   
    </div>
}</div>
  );
}

export default App;
