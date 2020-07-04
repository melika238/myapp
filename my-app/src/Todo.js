import React ,{useState} from 'react';

 const Todo =()=>{
    const [list, setlist ]= useState([
         {id:1, content:'drinking coffee'}
    ,{id:2,content:'do my homework'}
])
const [inputData,setInputData] = useState('')

     return(
     <>
     <h1> TO DO APP </h1>
     <ul>
     {
          list.map(item => <li>{item.content}</li>)
     }
     </ul>
     <input value={inputData} type="text" onChange={(e)=>{setInputData(e.target.value)}} />
     <button onClick={()=>{setlist([...list,{id:list.length,content:inputData}])}}>ADD</button>

     </>
     )


     }
   
export default Todo
