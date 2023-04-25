import { Helmet } from "react-helmet";
import langData from '../../lang/Home/lang-fa.json';

const Home = () => {
    return (
    <div>
        <Helmet>
            <title> {langData.title} </title>
        </Helmet>
        <h1>Home dsfasdsad</h1>
    </div>
    );
  };
  
  export default Home;