import logo from './logo.svg';
import './App.css';
import HookCount from './states';
import Fruit from './stateandProps';
import Counter  from './counterApp';
import OrderedListOnBlur from './blurEvent';
function App()
 {
  const fruits = 
{
  name:"Apple",
  color :"Red"

}
  return (
    <div className='App'>
      <Fruit fruits={fruits} />
      <HookCount />
      <Counter />
      <OrderedListOnBlur />
    </div>
    
  );
}

export default App;
