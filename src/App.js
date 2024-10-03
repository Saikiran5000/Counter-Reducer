import { useReducer } from "react";

function reducer(state,input){
    switch (input.type){
      case "DEC":
        return state+input.payload;
       case "RESET":
        return 0 ;
        case "INC":
          return state+input.payload 
        default: return state
    }
}


function App(){

   const [counter,dispatch]= useReducer(reducer,0)


  return(
    <>
    <button onClick={()=>{
      dispatch({type:"DEC",payload:-1})
    }} className="btn btn-primary">-</button>
    <h1>SAIKIRAN {counter}</h1>
    <button className="btn btn-primary" onClick={()=>{
      dispatch({type:"INC",payload:1})
    }}>+</button>
    <button className="btn btn-danger" onClick={()=>{
      dispatch({type:"RESET"})
    }}>Reset</button>
    
    </>
  )
}








export default App;
