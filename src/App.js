import React from 'react';
import JobsList from './jobComponents/jobList';
import Filters from './jobComponents/filters';
import { useState } from 'react';
function App() {

  const [filters, setFilters] = useState({ location: '' ,jobRole:'',minExp:'',minJdSalary:'',workType:'',companyName:''});

  return (
    <div className="App">
      <Filters filters={filters} setFilters={setFilters} />
    </div>
  );
}

export default App;