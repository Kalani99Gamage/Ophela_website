import './App.css';
import Navigation from './components/Home/Navigation/Navigation';
import Description from './components/Home/Description/Description';
import Introduction from './components/Home/Introduction/Introduction';
import Services from './components/Home/Services/Services';
import AmenityGallery from './components/Home/AmenityGallery/AmenityGallery';
import About from './components/Home/About/About';
import Footer from './components/Home/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation/>
      <Description/>
      <Introduction/>
      <Services/>
      <AmenityGallery/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
