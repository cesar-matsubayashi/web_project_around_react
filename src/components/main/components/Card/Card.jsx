import deleteIcon from "../../../../images/trash.svg";
import likeIcon from "../../../../images/like.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  return (
    <div className="gallery__card" id="">
      <img src={link} alt="" className="gallery__photo" />

      <img src={deleteIcon} alt="Excluir" className="gallery__trash" />

      <ul className="gallery__caption">
        <li className="gallery__title">{name}</li>

        <li className="gallery__like-content">
          <img src={likeIcon} alt="Like" className="gallery__like-btn" />
          <p className="gallery__like-count">0</p>
        </li>
      </ul>
    </div>
  );
}
