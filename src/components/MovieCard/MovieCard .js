import cls from './MovieCard.module.css';

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
                        



                    </div>
            </div>
        
        
        </>
    )



}


export default MovieCard;