import React,{useState} from 'react';
import './App.css';

const App = () => {
  const[input,setinput]=useState('');
  const[result,setresult]=useState(0);
  const handler=e=>{
    setinput(e.target.value)
  }
  return (
    <div>
      <center>
        <input class='output' type="text" value={input} name="input" onChange={handler}  /><br/>
        <button onClick={()=>setresult(eval(input))} class='box'> result</button>
        <h2>result is:{result}</h2>
        <button onClick={()=>setinput(input+'1')}>1 </button>
<button onClick={()=>setinput(input+'2')}>2 </button>
<button onClick={()=>setinput(input+'3')}>3 </button>
<button onClick={()=>setinput(input+'4')}>4 </button>
<button onClick={()=>setinput(input+'5')}>5 </button><br/>


<button onClick={()=>setinput(input+'6')}>6 </button>
<button onClick={()=>setinput(input+'7')}>7 </button>
<button onClick={()=>setinput(input+'8')}>8 </button>
<button onClick={()=>setinput(input+'9')}>9 </button>
<button onClick={()=>setinput(input+'10')}>10 </button><br/>



<button class='operator'onClick={()=>setinput(input+'+')}>+ </button>
<button class='operator'onClick={()=>setinput(input+'-')}>- </button>
<button class='operator' onClick={()=>setinput(input+'*')}>* </button>
<button class='operator'onClick={()=>setinput(input+'/')}>/ </button>
<button class='special'onClick={()=>setinput('')}>clr </button><br/>
      </center>
    </div>
  )
}

export default App

