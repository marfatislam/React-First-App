
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './myComponent/Welcome';
import Hello from './myComponent/Hello'
import Arrow from './myComponent/Arrow'
import State from './myComponent/State'
import SetState from './myComponent/SetState'
import Refresh from './myComponent/Refresh'
import RenderDom from './myComponent/RenderDom';
import FindDom from './myComponent/FindDom';
import From from './myComponent/From';

function App() {
  return (
    <div className="App">
      
      
    {/* <Hello></Hello>
    <Welcome></Welcome>{" "}
    <Arrow/>
    <State></State>
    <SetState></SetState>
    <Refresh></Refresh>
    <RenderDom></RenderDom>
    <FindDom></FindDom> */}
    <From></From>
    
    </div>
  );
}

export default App;
