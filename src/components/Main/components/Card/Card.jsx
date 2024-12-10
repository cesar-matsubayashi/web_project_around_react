import deleteIcon from "../../../../images/trash.svg";
import likeIcon from "../../../../images/like.svg";
import likeIconActive from "../../../../images/like-active.svg";
import ImagePopup from "../popup/components/ImagePopup/ImagePopup";

export default function Card({ handleOpenPopup, card, isLiked }) {
  const { name, link } = card;
  const imagePopup = { children: <ImagePopup card={card} /> };

  const cardLikeButtonClassName = `gallery__like-btn ${
    isLiked ? "gallery__like-btn_active" : ""
  }`;

  const like = isLiked ? likeIconActive : likeIcon;

  return (
    <div className="gallery__card" id="">
      <img
        onClick={() => handleOpenPopup(imagePopup)}
        src={link}
        alt={name}
        className="gallery__photo"
      />

      <img src={deleteIcon} alt="Excluir" className="gallery__trash" />

      <ul className="gallery__caption">
        <li className="gallery__title">{name}</li>

        <li className="gallery__like-content">
          <img src={like} alt="Like" className={cardLikeButtonClassName} />
          <p className="gallery__like-count">0</p>
        </li>
      </ul>
    </div>
  );
}
