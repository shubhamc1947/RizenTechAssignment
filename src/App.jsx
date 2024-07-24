import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ItemProvider } from './context/ItemContext';
import Dashboard from './components/Dashboard';
import InfoPage from './components/InfoPage'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import './App.css';

const App = () => {
  return (
    <ItemProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/info/:id" element={<InfoPage />} /> {/* Dynamic route */}
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        <Footer/>
      </Router>
    </ItemProvider>
  );
};

export default App;
