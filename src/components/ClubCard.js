import ClubPhoto from '../assets/club_photo.jpeg';
import '../assets/clubCard.css';

export const ClubCard = (el) => {
console.log(el)

    return(
        <div className="card">
            <img src={ClubPhoto}/>
            <span>{el.el.name}</span>
            |
            <span>{el.el.description}</span>
            <hr ></hr>
        </div>
        
    )
}