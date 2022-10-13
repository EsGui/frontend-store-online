import Router from './Routes';
import './App.css';
import Logic from './Context/logic';

function App() {
  return (
    <Logic>
      <Router />
    </Logic>
  );
}

export default App;
