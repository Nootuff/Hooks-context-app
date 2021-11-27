import { useState } from "react";
function useToggle(initialVal = false) {
 
  const [state, setState] = useState(initialVal); //These two values are parameters

  const toggle = () => { //Toggle state to be its opposite. 
    setState(!state);
  };
  
  // return piece of state AND a function to toggle it
  return [state, toggle];
}
export default useToggle;