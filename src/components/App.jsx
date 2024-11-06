import avatar from "../images/avatar.jpg";
import editButton from "../images/edit-button.svg";
import addButton from "../images/add-btn-sign.svg";
import Header from "./header/header";
import Main from "./main/main";
import Footer from "./footer/footer";

function App() {
  return (
    <div class="page">
      <Header />
      <section class="profile">
        <img src={avatar} alt="Profile photo" class="profile__photo" />
        <div class="profile__avatar-edit">
          <img src="" alt="Editar avatar" class="profile__edit-photo" />
        </div>

        <div class="profile__name-container">
          <h1 class="profile__name">Jacques Cousteau</h1>
          <img src={editButton} alt="Edit button" class="profile__edit-btn" />
          <p class="profile__about"></p>
        </div>

        <div class="profile__add-btn">
          <img src={addButton} alt="Adicionar" class="profile__add-btn-sign" />
        </div>
      </section>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
