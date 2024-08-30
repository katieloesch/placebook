import React, { useRef, useState } from 'react';
import { userIcon, userIcon2 } from '../../../assets/icons/icons';
import FormBtn from './FormBtn';
import './FormImgUpload.scss';

const FormImgUpload = ({ id, center }) => {
  const [file, setFile] = useState(null);

  const filePickerRef = useRef();

  const filePickerChangeHandler = (e) => {
    // console.log(e.target);
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
          <img src='' alt='avatar preview' />
        </div>
        <FormBtn type='button' onClick={pickImgHandler}>
          Pick Image
        </FormBtn>
      </div>
    </div>
  );
};

export default FormImgUpload;
