import PopupWithForm from "./PopupWithForm";
import React from "react";

function PopupWithEditAvatar(props) {

  const avatarRef = React.createRef();

  const [urlError, setUrlError] = React.useState({
    classInput: '',
    classError: '',
    errorMessage: ''
  });

  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  function handleChange() {
    const avatar = avatarRef.current;

    if (!avatar.validity.valid) {
      setUrlError({
        classInput: 'popup__input_error',
        classError: 'popup__error_visible',
        errorMessage: avatar.validationMessage
      });
      setIsFormValid(false);
    } else {
      setUrlError({
        classInput: '',
        classError: '',
        errorMessage: ''
      });
      setIsFormValid(true);

    }
  }

  function cleanErrors() {
    setUrlError({
      classInput: '',
      classError: '',
      errorMessage: ''
    });
    setIsFormValid(false);
  }

  function handleClose() {
    props.onClose();
    cleanErrors()
    avatarRef.current.value = '';
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsLoading(true);

    props.onUpdateAvatar({
      avatar: avatarRef.current.value
    })
      .catch(err => console.error(err))
      .finally(() => {
        setIsFormValid(false);
        setIsLoading(false);
      });
    avatarRef.current.value = '';
  }

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      isOpen={props.isOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
      isDisabled={!isFormValid}
      submitName={isLoading ? 'Сохранить...' : 'Сохранить'}
    >
      <label className="popup__form-field">
        <input
          className={`popup__input ${urlError.classInput}`}
          id="link-avatar"
          ref={avatarRef}
          onChange={handleChange}
          name="avatar"
          placeholder="Ссылка на картинку"
          required
          type="url"
        />
        <span
          className={`popup__error ${urlError.classError}`}
          id="link-avatar-error"
        >
          {urlError.errorMessage}
          </span>
      </label>

    </PopupWithForm>
  )
}

export default PopupWithEditAvatar