import { useState, useEffect, useContext } from "react";
import avatar from "../../images/avatar.jpg";
import editAvatarButton from "../../images/edit-avatar.svg";
import editButton from "../../images/edit-button.svg";
import addButton from "../../images/add-btn-sign.svg";
import Popup from "./components/popup/Popup";
import NewCard from "./components/popup/components/NewCard/NewCard";
import EditProfile from "./components/popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";
import api from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Main(props) {
  const { popup, onOpenPopup, onClosePopup } = props;
  const [cards, setCards] = useState([]);
  const { currentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((response) => {
        setCards(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  function checkCurrentUserLiked(card) {
    return card.likes.some((like) => like._id === currentUser._id);
  }

  async function handleCardLike(card) {
    const isLiked = checkCurrentUserLiked(card);

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((cards) =>
          cards.filter((currentCard) => currentCard._id !== card._id)
        );
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <section className="profile">
        <img
          src={currentUser.avatar}
          alt="Profile photo"
          className="profile__photo"
        />
        <div
          className="profile__avatar-edit"
          onClick={() => onOpenPopup(editAvatarPopup)}
        >
          <img
            src={editAvatarButton}
            alt="Editar avatar"
            className="profile__edit-photo"
          />
        </div>

        <div className="profile__name-container">
          <h1 className="profile__name">{currentUser.name}</h1>
          <img
            src={editButton}
            alt="Edit button"
            className="profile__edit-btn"
            onClick={() => onOpenPopup(editProfilePopup)}
          />
          <p className="profile__about">{currentUser.about}</p>
        </div>

        <div
          className="profile__add-btn"
          onClick={() => onOpenPopup(newCardPopup)}
        >
          <img
            src={addButton}
            alt="Adicionar"
            className="profile__add-btn-sign"
          />
        </div>
      </section>

      <main className="content">
        <section className="gallery">
          {cards.map((card) => (
            <Card
              handleOpenPopup={onOpenPopup}
              key={card._id}
              card={card}
              isLiked={checkCurrentUserLiked(card)}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </section>
        {popup && (
          <Popup onClose={onClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
