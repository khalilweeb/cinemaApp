import cls from './nav.module.css';
import home from '../../assets/home.png';
import mylist from '../../assets/list.png';
import heart from '../../assets/heart.png';
import later from '../../assets/clock.png';
import logo from '../../assets/video-camera.png'
import { Link , Outlet} from 'react-router-dom';
const nav = () => {

    




    return (
        <div className={cls.main}>
            <nav className={cls.nav}>
                    <div className={cls.logo}>
                       <img src={logo} alt='logo'/> <h1>Movieoss</h1>
                    </div>
                    <ul className={cls.menu}>
                      <Link className={cls.link} to={'home'}> <div className={cls.div}> <img src={home} alt='home icon'/>  <li>Home</li></div></Link> 
                      <Link className={cls.link} to={'/liked'}> <div className={cls.div}> <img src={heart} alt='home icon'/>  <li>Liked</li></div></Link> 
                      <Link className={cls.link} to={'/list'}> <div className={cls.div}> <img src={mylist} alt='home icon'/>  <li>Mylist</li></div></Link> 
                      <Link className={cls.link} to={'/watchLater'}> <div className={cls.div}> <img src={later} alt='home icon'/>  <li>Watch later</li></div></Link>
                    
                    </ul>

                    <div className={cls.users}>

                    </div>

                  
            </nav>

            <div >
                <div className={cls.bar}> 
                    <div>
                    <ul>
                        <li>Populair</li>
                        <li>New movies</li>
                        <li>Upcomming</li>
                    </ul>
                    </div>
                    
                    <div className={cls.search}>
                    <input ></input>
                    <button type="submit">srearch</button>
                    </div>
                     

                </div>
           
            </div>
            
            <Outlet/>
        </div>

    )

}


export default nav;