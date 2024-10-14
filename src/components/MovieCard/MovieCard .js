import cls from './MovieCard.module.css';

const MovieCard = (props) => {



    return (
        <>
            <div className={cls.card}>
                    <div className={cls.imgContainer}> 
                        <img  src={'https://image.tmdb.org/t/p/w500' + props.imgUrl} alt='movie poster'/>
                    </div>
                    <div className={cls.mainInfo}>
                        <h2>Inception</h2>
                        <p> EN / 7.7 / 2003-05-21 </p>

                        <p className={cls.descp}> {props.descp}</p>



                    </div>
            </div>
        
        
        </>
    )



}


export default MovieCard;