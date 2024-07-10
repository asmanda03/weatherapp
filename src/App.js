import React, { useState } from 'react';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import './styles.css';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Dashboard user={user} /> : <SignUp setUser={setUser} />}
    </div>
  );
};

export default App;
