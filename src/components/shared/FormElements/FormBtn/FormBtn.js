import React from 'react';
import { Link } from 'react-router-dom';

import './FormBtn.scss';

const FormBtn = ({
  href,
  size,
  inverse,
  danger,
  to,
  exact,
  type,
  onClick,
  disabled,
  children,
}) => {
  if (href) {
    return (
      <a
        className={`btn btn--${size || 'default'} ${
          inverse && 'btn--inverse'
        } ${danger && 'btn--danger'}`}
        href={href}
      >
        {children}
      </a>
    );
  }
  if (to) {
    return (
      <Link
        to={to}
        exact={exact}
        className={`btn btn--${size || 'default'} ${
          inverse && 'btn--inverse'
        } ${danger && 'btn--danger'}`}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={`btn btn--${size || 'default'} ${inverse && 'btn--inverse'} ${
        danger && 'btn--danger'
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default FormBtn;
