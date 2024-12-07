import deleteIcon from "../../../../images/trash.svg";
import likeIcon from "../../../../images/like.svg";
import ImagePopup from "../popup/components/ImagePopup/ImagePopup";

export default function Card({ handleOpenPopup, card }) {
  const { name, link, isLiked } = card;
  const imagePopup = { children: <ImagePopup card={card} /> };

  return (
    <div className="gallery__card" id="">
      <img
        onClick={() => handleOpenPopup(imagePopup)}
        src={link}
        alt=""
        className="gallery__photo"
      />

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
