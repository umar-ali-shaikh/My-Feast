import { useEffect, useState } from "react";
// import "./popup.css";

const FirstTimePopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // show on load
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box">

        {/* Header */}
        <div className="popup-header">
          GANESHUTSAV MYFEST
          <button className="close-btn" onClick={handleClose}>×</button>
        </div>

        {/* Content */}
        <div className="popup-body text-center">
          <p>
            सदर ॲप प्रथम वापर करतांस वर्षभर फ्री सुविधा उपलब्ध राहील.
            त्याकरिता खालील दिलेल्या नंबर वर संपर्क साधावा.
          </p>

          <a href="tel:9324505363" className="call-btn">
            📞 93245 05363
          </a>
        </div>

      </div>
    </div>
  );
};

export default FirstTimePopup;