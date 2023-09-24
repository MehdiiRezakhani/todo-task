//images
import clear from "../images/icon-cross.svg";
import check from "../images/icon-check.svg";

import {useState} from "react";
function TodoItem({ item, theme,id,deleteTask ,complete}) {
  const [Complete , setComplete]  =useState(complete);
  function handleClick(e) {
    if (!Complete) {
     setComplete(true);
    } else {
     setComplete(complete);
    }
    console.log('clicked')
  }
  return (
    <div className={`container container-${theme}`}>
      <div className="circle" onClick={handleClick}>
      <img className="check" src={check} alt="check mark"  />
      </div> 
      <p className={Complete? 'line item': 'item'}>{item}</p>
      <img src={clear} alt="clear" onClick ={ () => deleteTask(id)} />
    </div>
  );
}

export default TodoItem;
