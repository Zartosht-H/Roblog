/** @format */

import style from "./inputText.module.css";

function InputText(params) {
  return (
    <div className="mb-3">
      <label htmlFor={params.idFor} className="form-label">
        {params.title}
      </label>
      <textarea
        rows="15"
        className="form-control"
        id={params.idFor}
        aria-describedby="basic-addon3 basic-addon4"
        onChange={params.change}
      />
    </div>
  );
}

export default InputText;
