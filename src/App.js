import './App.css';
import Navbar from './components/Navbar';
import Approdable from './pages/Approdable';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Newsletter from './pages/Newsletter';
import PopularAdvice from './pages/PopularAdvice';
import PracticeAdvice from './pages/PracticeAdvice';
import QualityEdu from './pages/QualityEdu';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <QualityEdu/>
        <PracticeAdvice/>
        <PopularAdvice/>
        <Approdable/>
        <Newsletter/>
        <Footer/>
    </div>
  );
}

export default App;
