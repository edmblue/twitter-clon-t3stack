import TwitterIcon from "../../../public/images/menu/TwitterIcon.svg";
import CloseIcon from "../../../public/images/icons/Close.svg";

type ModalProps = {
  children: React.ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center bg-gray-700 bg-opacity-40">
      <div className="relative z-50 h-3/4 w-2/6 overflow-y-auto rounded-xl bg-white bg-opacity-100 p-3">
        <button className="absolute flex h-7 w-7 items-center justify-center rounded-full p-2 hover:bg-gray-200">
          <CloseIcon />
        </button>
        <TwitterIcon fill="#1DA1F2" className="mx-auto" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
