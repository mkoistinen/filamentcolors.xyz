import style from './style.scss';
import gif from './loading.gif';

export default function LoadingGif() {
    return (
        <img src={gif} alt='loading spinner' className={style.centerIt}/>
    )
}
