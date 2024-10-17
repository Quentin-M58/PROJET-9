import PropTypes from "prop-types";

import "./style.scss";

export const FIELD_TYPES = {
  INPUT_TEXT: 1,
  TEXTAREA: 2,
};

const Field = ({ type = FIELD_TYPES.INPUT_TEXT, fieldType, label, name, placeholder }) => {
  let component;
  switch (type) {
    case FIELD_TYPES.INPUT_TEXT:
      component = (
        <input
        // ajout placeholder pour texte afficher en attendant saisie
        // ajout required pour signifier obligatoire
          type={fieldType}
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
          required
        />
      );
      break;
    case FIELD_TYPES.TEXTAREA:
      // ajout placeholder pour texte afficher en attendant saisie
      // ajout required pour signifier obligatoire
      component = <textarea name={name} data-testid="field-testid" placeholder={placeholder} required />;
      break;
    default:
      component = (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          data-testid="field-testid"
        />
      );
  }
  return (
    <div className="inputField">
      <span>{label}</span>
      {component}
    </div>
  );
};

Field.propTypes = {
  type: PropTypes.oneOf(Object.values(FIELD_TYPES)),
  name: PropTypes.string,
  // ajout fieldtype pour definir type input
  fieldType: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};
 Field.defaultProps = {
   label: "",
   placeholder: "",
   type: FIELD_TYPES.INPUT_TEXT,
   name: "field-name",
   fieldType: "text", 
 }

export default Field;
