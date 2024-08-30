import React, { useEffect, useRef, useState } from 'react';

import FormBtn from './FormBtn';
import { icons } from '../../../assets/icons';
import './FormImgUpload.scss';

const FormImgUpload = ({ id, center, onInput, errorText }) => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const filePickerRef = useRef();

  useEffect(() => {
    // triggered whenever file changes
    if (!file) {
      return;
    }

    // use built-in browser API to generate preview url
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const filePickerChangeHandler = (e) => {
    // console.log(e.target);
    let pickedFile;
    let fileIsValid = isValid;
    if (e.target.files && e.target.files.length === 1) {
      pickedFile = e.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }

    onInput(id, pickedFile, fileIsValid);
  };

  const pickImgHandler = () => {
    filePickerRef.current.click();
  };

  return (
    <div className='form-control'>
      <input
        type='file'
        id={id}
        ref={filePickerRef}
        style={{ display: 'none' }}
        accept='.jpg, .png, .jpeg, .svg'
        onChange={filePickerChangeHandler}
      />
      <div className={`image-upload ${center && 'center'}`}>
        <div className='image-upload__preview'>
          {previewUrl && <img src={previewUrl} alt='avatar preview' />}
          {!previewUrl && <p>Please pick an image.</p>}
        </div>
        <FormBtn type='button' onClick={pickImgHandler}>
          Pick Image
        </FormBtn>
      </div>
      {!isValid && <p>{errorText}</p>}
    </div>
  );
};

export default FormImgUpload;
