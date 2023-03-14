// App.js
import { Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import Home from './pages/Home';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newacc" element={<CreateAccount />} />
       </Routes>
    </>
 );
};

export default App;