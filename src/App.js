import MyClock from '../src/my-clock';
import './App.css';

function App() {
  //如果不加className能正常运行,但不会加载App.css中对App类写的样式
  return (
    <div className='App'>
      <MyClock />
    </div>
  );
}

export default App;
