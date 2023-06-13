import { useField } from 'formik';

import "./RadioButtonCustom.scss";

const RadioButton = ({label, ...props}) => {
  const [field] = useField(props);

  return (
    <div className="radio">
      <label {...field} {...props}>
        <input type="radio" value={label} name={props.name}/>
        {label}
        <span></span>
      </label>
    </div>
  )
}

export default RadioButton;
