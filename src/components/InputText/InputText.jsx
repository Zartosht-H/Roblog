/** @format */


function InputText(params) {
  return (
    <div className={`mb-3 ${params.class}`}>
      <label htmlFor={params.idFor} className="form-label">
        {params.title}
      </label>
      <input
        type="text"
        className="form-control"
        id={params.idFor}
        aria-describedby="basic-addon3 basic-addon4"
        onChange={params.change}
      />
    </div>
  );
}

export default InputText;