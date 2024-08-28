import React from 'react';

import { FormBtn, Modal } from '../../../../components';

const ErrorModal = ({ error, onClear }) => {
  return (
    <Modal
      onCancel={onClear}
      header='An Error Occurred!'
      show={!!error}
      footer={<FormBtn onClick={onClear}>Okay</FormBtn>}
    >
      <p>{error}</p>
    </Modal>
  );
};

export default ErrorModal;
