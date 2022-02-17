import { useState } from 'react';
import SquarePage from './SquarePage';

function App() {
  const [page,setPage] = useState("squares");
  return (
    <div className="App">
      <SquarePage/>
    </div>
  );
}

export default App;
