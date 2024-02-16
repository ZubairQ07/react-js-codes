import './App.css';
import SidebarComponent from '../other/Sidebar';
import CarouselComponent from '../other/Carousel';
import AboutComponent from '../other/About';
import ReferenceFormComponent from '../other/ReferenceFormComponent';
import FooterComponent from '../other/Footer';
let App = () =>{
  return (
    <div className="App">
      <div className="row">
        <div className="col-md-3">
            <SidebarComponent/>
        </div>

        <div className="col-md-9">
        <CarouselComponent />
        
        <AboutComponent />
       
        <div >
       
        <ReferenceFormComponent />
        </div>
        </div>
      </div>
      <FooterComponent />

    </div>
  );
}

















export default App;
