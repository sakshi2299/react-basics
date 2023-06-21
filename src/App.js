
import React, {createContext} from 'react';
import ChildA from './Components/ChildA';


const data = createContext();
const data1 = createContext();

function App() {
  const name = "sakshi"
  const gender = "female"
  return (
    <data.Provider value ={name}>
      <data1.Provider value={gender}>
    <ChildA/>
    </data1.Provider>
    </data.Provider>
  );
}

export default App;
export{data,data1};
