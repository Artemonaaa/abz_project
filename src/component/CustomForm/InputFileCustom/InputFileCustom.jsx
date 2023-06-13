import { useState } from "react"
import { useField } from "formik";

import "./InputFileCustom.scss"

const InputFile = ({...props}) => {
  const [nameFile, setNameFile] = useState("Upload your photo");
  const [field, meta] = useField(props);
  
  const HandleFileNameChange = (event) => {
    if (event.target.files[0]) {
     setNameFile(() => event.target.files[0].name);
    } else {
      setNameFile(() => "Upload your photo");
    }
  };

  return (
    <div className="file">
      <label onChange={HandleFileNameChange} className="input-file" >
        <div className="input-file-button">Upload</div>
        <input type="file" hidden="hidden" name={props.name} {...field} {...props}/>
        <span className="input-file-text" type="text">{nameFile}</span>
      </label>
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </div>
  )
}

export default InputFile;