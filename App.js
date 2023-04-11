import React ,{useState} from 'react';
function Temp()
{
  const [color,setColor]=useState("red");
  const [count,setCount]=useState(0);
  const [c1,setC1]=useState(0);
  setTimeout(()=>{setC1(c1+1)},400);
  var tempo=new Date().toLocaleString();
  const [time,setTime]=useState(tempo);
  var hour=new Date().getHours();
  var min=new Date().getMinutes();
  const sec=new Date().getSeconds();
  let p="#f0baf5";
  const [col,setCol]=useState(p);
  return (
     <>
       <div style={{backgroundColor:col}} > 
       <hr/>
      <h1>My favorite color is {color}! and click count is {count} and no of seconds  {c1}</h1>
      <hr/>
      <button type='button' onClick={()=> {setColor("blue");setCount(count+1);}}>Blue</button>
      <button type='button' onClick={()=>{setColor("black");setCount(count+1);}}>black</button>
      <button type='button' onClick={()=>{setColor("pink");setCount(count+1);}}>pink</button>
      <button type='button' onClick={()=>{setColor("yellow");setCount(count+1);}}>yellow</button>
      <button type='button' onClick={()=>{setColor("green");setCount(count+1);}}>green</button>
      <button type='button' onClick={()=>{setColor("white");setCount(count+1);}}>white</button>
      <hr/>
      <h1>clock time: {hour} : {min} : {sec}</h1> 
      <hr/>
      <h1> time : {time}</h1>
      <button  onClick={()=>{setTime(tempo);}}>
       Refresh
      </button>
      <hr/>
      <button type="button" onMouseOver={()=>{setCol("#27acb1");}} onMouseLeave={()=>{setCol(p);}}>click me for change the color of background </button>
      </div>
    </>
  );

}
function Form(){
  const [name,setName]=useState({
    fname:'',
    lname:'',
  });
  const [last,setLame]=useState({
    fname:'',
    lname:'',
  });
  function confirmVal()
  {
    const tq2=name.fname;
    const tq3=name.lname;
    setLame({
      fname:tq2,
      lname:tq3,
    });
  }
  function changeVal(e)
  {
    const tq1=e.target.value;
    setName({...name,fname:tq1});
   }
  function changeVal2(e)
  {
    const tq1=e.target.value;
    setName({...name,lname:tq1});
  }
  return (<>
      <div>hello guys  {last.fname} {last.lname} </div>
     <input type="text"  placeholder='name'  onChange={changeVal} defaultValue=""/>
     <input type="text" placeholder='lastname' onChange={changeVal2} defaultValue=""/>
     <button onClick={confirmVal}>
      submit 
     </button>
  </>);
}
export {Temp,Form};
