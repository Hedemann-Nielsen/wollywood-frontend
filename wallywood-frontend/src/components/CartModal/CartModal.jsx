import ReactModal from 'react-modal';

ReactModal.setAppElement(document.getElementById('root'));

export function CartModal ({ isOpen, onRequestClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="CartModal"
    >
      {children}
    </ReactModal>
  );
};