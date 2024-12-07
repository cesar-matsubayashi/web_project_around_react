export default function EditAvatar() {
  return (
    <form className="form form_edit-avatar" name="edit-avatar" noValidate>
      <fieldset className="form__fieldset">
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
          Salvar
        </button>
      </fieldset>
    </form>
  );
}
