import logo from './logo.svg';
import './App.css';
import ProductsList from './ProductsList';
import ConditionalRendering from './ConditionalRendering';
import NavBar from './Pages/NavBar';
import {BrowserRouter} from 'react-router-dom'
import Form1  from './Form/Form1';
import Form2 from './Form/Form2';
import Form3 from './Form/Form3';
import ComponentA from './PropS Drilling/ComponentA';
import Counter from './Reducer/Counter';
import ErrorBoundary from './Reducer/ErrorBoundary';

function App() {
  return (
    <div className="App">
     {/* <ProductsList/> */}
     {/* <ConditionalRendering/> */}

   {/* <BrowserRouter>
   <NavBar/>
   </BrowserRouter> */}

   {/* <Form1/> */}
   {/* <Form2/> */}

   {/* <Form3/> */}


   {/* <ComponentA    /> */}

<ErrorBoundary>
<Counter/>
</ErrorBoundary>
   
 <ErrorBoundary>
 <Counter/>
 </ErrorBoundary>
    </div>
  );
}

export default App;
