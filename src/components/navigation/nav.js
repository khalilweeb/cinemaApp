import cls from './nav.module.css';
import home from '../../assets/home.png';
import mylist from '../../assets/list.png';
import heart from '../../assets/heart.png';
import later from '../../assets/clock.png';
import logo from '../../assets/video-camera.png'
const nav = () => {

    




    return (
        <>
            <nav className={cls.nav}>
                    <div className={cls.logo}>
                       <img src={logo} alt='logo'/> <h1>Movieoss</h1>
                    </div>
                    <ul className={cls.menu}>
                       <div className={cls.div}> <img src={home} alt='home icon'/>  <li>Home</li></div>
                       <div className={cls.div}> <img src={heart} alt='home icon'/>  <li>Liked</li></div>
                       <div className={cls.div}> <img src={mylist} alt='home icon'/>  <li>Mylist</li></div>
                       <div className={cls.div}> <img src={later} alt='home icon'/>  <li>Watch later</li></div>
                    
                    </ul>

                    <div className={cls.users}>

                    </div>

                  
            </nav>
        
        </>

    )

}


export default nav;