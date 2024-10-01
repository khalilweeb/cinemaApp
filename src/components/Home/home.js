import { Outlet } from "react-router-dom";
import cls from './home.module.css';
const Home = () => {

return (
<div>
<div style={{color: 'black'}}> this is the Home page !</div> 
<Outlet />
      
</div>




)

}

export default Home;