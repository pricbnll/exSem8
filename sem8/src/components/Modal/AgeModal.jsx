import "./AgeModal.css";

function AgeVerificationModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <img
            src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fsmall-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D83%26h%3D83%26dpr%3D2%26fm%3Dpng&w=96&q=75"
            alt="Zé delivery logo"
          />
          <h2>Você tem 18 anos ou  <br/>mais?</h2>
        </div>

        <div className="modal-btn">
          <button onClick={() => onClose(false)} className="cancel-btn">
            Não
          </button>
          <button onClick={() => onClose(true)} className="confirm-btn">
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default AgeVerificationModal;
