import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/themes/default/theme.scss';
import Homepage from './pages/Homepage';
import CategoryPage from './pages/Categories/CategoryPage';
import HisResult from './pages/Result/His_result';
import QuestionPage from './pages/Questions/QuestionPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='/Category' element={<CategoryPage/>} />
        <Route path='/Question' element={<QuestionPage/>} />
        <Route path='/Result' element={<HisResult/>} />
      </Routes>
    </Router>
      
  );
}

export default App;
