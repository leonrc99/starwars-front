import './App.scss';
import PersonsForm from './persons/form/PersonsForm';
import PersonsList from './persons/list/PersonsList';

function App() {
  return (
    <div className='principal'>
      <img className='sw-logo' src="./assets/imgs/logo.png" alt="logo" />

      < PersonsList />
    </div>
  );
}

export default App;
