import cls from './MovieCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const MovieCard = (props) => {



    return (
        <>
            <div className={cls.card}>
                    <div className={cls.imgContainer}> 
                        <img  src={'https://image.tmdb.org/t/p/w500' + props.imgUrl} alt='movie poster'/>
                    </div>
                    <div className={cls.mainInfo}>
                        <h2>{props.title}</h2>
                        <p> {props.lang} / {props.rate} / {props.date} </p>
                        <div className={cls.piv}>
                        <p className={cls.descp}> {props.descp}</p>
                        </div>
                        
                       <div className={cls.divIcons}>
                                 <FontAwesomeIcon icon={faHeart} />
                                 <FontAwesomeIcon icon="fa-solid fa-bars-staggered"  className={cls.icn}/>
                                
                       </div>


                    </div>
            </div>
        
        
        </>
    )



}


export default MovieCard;