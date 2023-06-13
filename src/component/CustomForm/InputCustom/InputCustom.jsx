import { useField } from "formik";

import "./InputCustom.scss";

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div aria-hidden="true" className="input-box">
      <label aria-hidden="true" {...field} {...props}>
        <input aria-hidden="true" 
          style={
            meta.touched && meta.error ? { border: "1px solid #CB3D40" } : null
          }
          name={props.name}
          required 
        />
        <span style={meta.touched && meta.error ? { color: "#CB3D40" } : null}>
          {label}
        </span>
        {props.type === "tel" && (
          <p style={meta.touched && meta.error ? { color: "#CB3D40" } : null}>
            +38 (XXX) XXX - XX - XX
          </p>
        )}
        {meta.touched && meta.error && props.type !== "tel" ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </label>
    </div>
  );
};

export default Input;
