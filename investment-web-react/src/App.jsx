import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Website from './Page/Website';
import Login from './Page/Login/Login'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for the main Website component */}
        <Route path="/" element={<Website />} />
        
        {/* Route for the Login component */}
        <Route path="/login" element={<Login />} />  {/* No nesting needed */}
      </Routes>
    </Router>
  );
};

export default App;
