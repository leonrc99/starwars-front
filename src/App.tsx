import './App.scss';
import PersonsForm from './persons/form/PersonsForm';

function App() {
  return (
    <div className='principal'>
      <img className='sw-logo' src="./assets/imgs/logo.png" alt="logo" />

      < PersonsForm />
    </div>
  );
}

export default App;
