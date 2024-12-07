export default function NewCard() {
  return (
    <form className="form form_add" name="add" noValidate>
      <fieldset className="form__fieldset">
        <input
          type="text"
          name="name"
          id="name-input"
          className="form__input form__input_el_name"
          placeholder="Título"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="name-input-error form__input-error"></span>

        <input
          type="url"
          name="link"
          id="link-input"
          className="form__input form__input_el_link"
          placeholder="Link da imagem"
          required
        />
        <span className="link-input-error form__input-error"></span>
        <button type="submit" name="submit" className="form__button">
          Criar
        </button>
      </fieldset>
    </form>
  );
}
