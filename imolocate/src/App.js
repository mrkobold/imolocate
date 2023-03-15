// App.js
import { Routes, Route } from 'react-router-dom';
import CreateAccount from './pages/CreateAccount';
import PostAddress from './pages/PostAddress';
import Home from './pages/Home';

const App = () => {
 return (
    <>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newacc" element={<CreateAccount />} />
          <Route path="/post" element={<PostAddress />} />
       </Routes>
    </>
 );
};

export default App;