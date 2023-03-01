import { useState } from 'react';
import './App.css';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';
import Sidebar from './components/layouts/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from './pages/Questions/Questions';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        {isLogged ?
          <div>
            <Header setIsLogged={setIsLogged} />
            <Sidebar />
            <main id="main" class="main">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/questions" element={<Questions />} />
              </Routes>
            </main>
            <Footer />
          </div>
          :
          <Routes>
            <Route path="/" element={<Login setIsLogged={setIsLogged} />} />
          </Routes>
        }
      </div>
    </BrowserRouter>
  );
}

export default App;
