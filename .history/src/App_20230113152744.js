import Layout from './assets/components/Layout/Layout';

//Personal Center
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import  PersonalInfo from './components/PersonalInfo';
import 'antd/dist/reset.css';

function App() {
  // return <Layout />;
  return (
  <div className="App">
  <PersonalInfo />
    {/* <BrowserRouter> */}
      
      <Category />
      
      <Pages />
      
    {/* </BrowserRouter> */}
  </div>

  );
}

export default App;
