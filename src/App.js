import logo from './logo.svg';
import './App.css';
import Photo from './profile/ProfilePhoto';
import Name from './profile/FullName';
import Adresse from './profile/Adresse';
function App() {
  return (
    <div className="App">
      <Photo/>
      <Name/>
      <Adresse/>
    </div>
  );
}

export default App;
