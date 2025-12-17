import React, {Fragment} from 'react';
import './App.css';
import TallyCounter  from './Component/Handle-Events';


function App() {
  return (
    <Fragment>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <h2 className='navbar-brand'> <span className='text-white fw-bold m-2'>TALLY</span> <span className='text-warning '>counter</span></h2> {/* span is inline  having no margin on top and bottom */}
    </nav>
    <TallyCounter/>
    </Fragment>
    
  );
}
export default App;

