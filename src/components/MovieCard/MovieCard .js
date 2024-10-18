import cls from './MovieCard.module.css';
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";




const MovieCard = (props) => {

        const descpControler = (text) => {

            if (text.length > 150) {

                text = text.substr(0 , 150) + '...';
            }
            return text;
        }



    return (
        <>
            <div className={cls.card}>
                    <div className={cls.imgContainer}> 
                        <img  src={'https://image.tmdb.org/t/p/w500' + props.imgUrl} alt='movie poster'/>
                    </div>


                    <div className={cls.mainInfo}>
                        <h2 className={cls.title}>{props.title}</h2>
                        <p className={cls.infos}> {props.lang} / {props.rate} / {props.date} </p>
                        <div className={cls.piv}>
                        <p className={cls.descp}> {descpControler(props.descp)}</p>
                        </div>
                        
                       <div className={cls.divIcons}>
             
                                <IoIosAddCircleOutline  className={cls.icn}/>
                                <CiHeart className={cls.icn}/>
                                <MdOutlineWatchLater className={cls.icn}/>
                                <MdPlaylistAdd className={cls.icn}/>
                       </div>


                    </div>
            </div>
        
        
        </>
    )



}


export default MovieCard;