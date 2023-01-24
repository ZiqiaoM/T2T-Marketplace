import Layout from './assets/components/Layout/Layout';

//Personal Center
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import  PersonalInfo from './components/PersonalInfo';
import 'antd/dist/reset.css';

function App() {

  return (

  <div>

  {/* <Layout/> */}

  <PersonalInfo />
      <Category />
      <Pages />

  </div>
  );
}

export default App;
