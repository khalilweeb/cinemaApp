import cls from './nav.module.css';
import home from '../../assets/home.png';
import mylist from '../../assets/list.png'

const nav = () => {

    




    return (
        <>
            <nav className={cls.nav}>
                    <div className={cls.logo}>
                       
                    </div>
                    <ul className={cls.menu}>
                       <div> <img src={home} alt='home icon'/>  <li>Home</li></div>
                       <div> <img src={mylist} alt='home icon'/>  <li>Liked</li></div>

                       <div> <img src={mylist} alt='home icon'/>  <li>Mylist</li></div>
                       <div> <img src={mylist} alt='home icon'/>  <li>Watch later</li></div>
                    
                    </ul>

                  
            </nav>
        
        </>

    )

}


export default nav;