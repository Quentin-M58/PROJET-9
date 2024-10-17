import { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Field, { FIELD_TYPES } from "../../components/Field";
import Select from "../../components/Select";
import Button, { BUTTON_TYPES } from "../../components/Button";

const mockContactApi = () => new Promise((resolve) => { setTimeout(resolve, 500); })

const Form = ({ onSuccess, onError }) => {
  const [sending, setSending] = useState(false);
  // ajout pour reset input person/ent
  const [persent, setpersent] = useState(1);
  const sendContact = useCallback(
    async (evt) => {
      evt.preventDefault();
      setSending(true);
      // We try to call mockContactApi
      try {
        await mockContactApi();
        setSending(false);
        // ajout onSuccess(); car appelle fonction
        onSuccess();
        // ajout pour reset formulaire
        document.querySelector("form").reset()
        // ajout pour reset input person/ent
        setpersent(Math.random())
      } catch (err) {
        setSending(false);
        onError(err);
      }
    },
    [onSuccess, onError]
  );
  return (
    <form onSubmit={sendContact}>
      <div className="row">
        <div className="col">
          {/* ajout placeholder pour texte a afficher en attente de saissie */}
          <Field placeholder="Votre nom" label="Nom" />
          <Field placeholder="Votre prénom" label="Prénom" />
          <Select
            key={persent}
            selection={["Personel", "Entreprise"]}
            onChange={() => null}
            label="Personel / Entreprise"
            type="large"
            titleEmpty
          />
          {/* ajout placeholder pour texte a afficher en attente de saissie */}
          {/* ajout fieldtype pour type input */}
          <Field fieldType="email" placeholder="Votre email" label="Email" />
          <Button type={BUTTON_TYPES.SUBMIT} disabled={sending}>
            {sending ? "En cours" : "Envoyer"}
          </Button>
        </div>
        <div className="col">
          <Field
            // ajout placeholder pour texte a afficher en attente de saissie
            placeholder="Votre message"
            label="Message"
            type={FIELD_TYPES.TEXTAREA}
          />
        </div>
      </div>
    </form>
  );
};

Form.propTypes = {
  onError: PropTypes.func,
  onSuccess: PropTypes.func,
}

Form.defaultProps = {
  onError: () => null,
  onSuccess: () => null,
}

export default Form;
