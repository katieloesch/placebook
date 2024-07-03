import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import { Backdrop } from "../..";
import "./Modal.scss";

const Overlay = ({
  className,
  style,
  headerClass,
  header,
  onSubmit,
  contentClass,
  footerClass,
  footer,
  children,
}) => {
  const content = (
    <div className={`modal ${className} style=${style}`}>
      <header className={`modal__header ${headerClass}`}>
        <h2>{header}</h2>
      </header>
      <form onSubmit={onSubmit ? onSubmit : (e) => e.preventDefault}></form>
      <div className={`modal__content ${contentClass}`}>{children}</div>
      <footer className={`modal__footer ${footerClass}`}>{footer}</footer>
    </div>
  );
  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <Overlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
