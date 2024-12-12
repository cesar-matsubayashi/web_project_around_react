import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((response) => {
        setCurrentUser(response);
      });
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await api
        .getInitialCards()
        .then((response) => {
          setCards(response);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateUserInfo(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api.updateProfileAvatar(data).then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      });
    })();
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup();
  }

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
    <CurrentUserContext.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
