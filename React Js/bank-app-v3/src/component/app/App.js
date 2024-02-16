import './App.css';
import HomeComponent from '../other/Home';
import NavigationComponent from '../other/Navigation';
import BankComponent from '../other/Bank';

function App() {
  let onDelete =(data)=>{
      console.log("this is",data);
  }
  return (
    <div className="App">
      <NavigationComponent />
      <HomeComponent />

      <div className="container-xxl">
        <BankComponent onDelete={onDelete}/>
      </div>
    </div>
  );
}

export default App;
