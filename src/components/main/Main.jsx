import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import editAvatarButton from "../../images/edit-avatar.svg";
import editButton from "../../images/edit-button.svg";
import addButton from "../../images/add-btn-sign.svg";
import Popup from "./components/popup/Popup";
import NewCard from "./components/popup/components/NewCard/NewCard";
import EditProfile from "./components/popup/components/EditProfile/EditProfile";
import EditAvatar from "./components/popup/components/EditAvatar/EditAvatar";
import Card from "./components/Card/Card";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Novo Local", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup();
  }

  return (
    <>
      <section className="profile">
        <img src={avatar} alt="Profile photo" className="profile__photo" />
        <div
          className="profile__avatar-edit"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          <img
            src={editAvatarButton}
            alt="Editar avatar"
            className="profile__edit-photo"
          />
        </div>

        <div className="profile__name-container">
          <h1 className="profile__name">Jacques Cousteau</h1>
          <img
            src={editButton}
            alt="Edit button"
            className="profile__edit-btn"
            onClick={() => handleOpenPopup(editProfilePopup)}
          />
          <p className="profile__about"></p>
        </div>

        <div
          className="profile__add-btn"
          onClick={() => handleOpenPopup(newCardPopup)}
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
            <Card key={card._id} card={card} />
          ))}
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
