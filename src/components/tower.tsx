import React  from "react";
import { useState } from "react";
import Swal from 'sweetalert2'
const Tower=({towers,setTowers,numberofrings}:any)=>{
    const[clicked,setClicked]=useState(false)
    const[selectedtower,setSelectedtower]=useState<number|undefined>()
     const color=['black','purple','brown','blue','red','green','DarkRed','DarkSlateGray','SlateBlue','Gold','LightBlue','Chartreuse',]
    const handletower=(index:number )=>{
        let num=0;
        if(selectedtower!==undefined){
        const ringindex=towers[selectedtower]
        const towerindex=towers[index]
        const tower1ind=towers[0]
        const tower2ind=towers[1]
        // debugger;
        // const bgcolor=document.querySelector<HTMLElement>(`#ringid${ind}`)!
        // bgcolor.style.opacity='0.7'
        
        if(ringindex[0]>(towerindex[0] ?? 99999)){
           setSelectedtower(undefined)
           return 
           
        }
       
        // if(towers[2].length>4){
        //     alert('you win')
             

        // }
        if(ringindex[0]>=0){
        const retower=[...towers]
        const retowe=retower[selectedtower].shift()!
      
            retower[index].unshift(retowe)
            setTowers(retower)
            setSelectedtower(undefined)
            if(retower[1].length===0&&retower[0].length===0){
                Swal.fire({
                    title: 'You win!',
                    text: 'Hanoi Rings Passed Succesfully.',
                    imageUrl: 'https://cdn.kastatic.org/ka-perseus-images/5b5fb2670c9a185b2666637461e40c805fcc9ea5.png',
                    imageWidth: 400,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                  })
            }
        }
   
    // if(clicked===false){
    //     bgcolor.style.opacity='0.7'
      
    // }
    // else{
    //     bgcolor.style.opacity='1'

    // }
  
        }
        else{
          setSelectedtower(index)
        }
        
        
        
    }
    return(
<div className="tower1">
      {
        towers.map((tower:any,index:number)=>
        <div key={index} className='rings' onClick={()=>handletower(index)} >
       <div className='towercontainer'  style={{ height:numberofrings <10&&numberofrings>3 ? `${ numberofrings*28+10 }px`:'100px'}} >
        {
            [...tower].reverse().map((towerr:any,ind:number)=>
            <div key={ind}   className='towerring' id={`ringid${ind}`} style={{width:`${towerr*20+35}px`,backgroundColor:`${color[towerr]}`,bottom:`${ind*28+6}px` }} >{towerr}</div>
            
            )
        }
        </div></div>
        )
      }
      
   </div> )
};export default Tower