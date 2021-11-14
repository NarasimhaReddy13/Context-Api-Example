import React, {createContext, useState} from 'react';

import Count from './Count';
import Display from './Display';

export const store = createContext();

const App = () => {
  const [data, setData] = useState([
    {
      brandname: "Nokia"
    }, 
    {
      brandname: "Honor"
    }, 
    {
      brandname: "Mi"
    }
  ]);
  return (
    <store.Provider value={[data, setData]}>
      <center>
        <Count />
        <Display />
      </center>
    </store.Provider>
  );
}

export default App;



// * Context API is a kind of feature used to share data with multiple components without passing the data thrrough props manually.
















// import React, {createContext, useState} from 'react';

// import ComponentA from './ComponentA';
// import ComponentB from './ComponentB';

// export const store = createContext();

// const App = () => {
//   const [data, setData] = useState(0);
//   return (
//     <store.Provider value={[data, setData]}>
//       <center>
//         <ComponentA />
//         <ComponentB />

//         <button onClick={() => setData(data + 1)}> Increment </button>
//       </center>
//     </store.Provider>
//   );
// }

// export default App;
