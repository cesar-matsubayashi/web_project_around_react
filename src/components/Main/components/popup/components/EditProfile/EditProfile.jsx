export default function EditProfile() {
  return (
    <form className="form form_edit" name="edit" noValidate>
      <fieldset className="form__fieldset">
        <input
          type="text"
          name="name"
          id="name-input"
          className="form__input form__input_el_name"
          placeholder="Nome"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="name-input-error form__input-error"></span>

        <input
          type="text"
          name="about"
          id="about-input"
          className="form__input form__input_el_about"
          placeholder="Sobre mim"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="about-input-error form__input-error"></span>
        <button type="submit" name="submit" className="form__button">
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
