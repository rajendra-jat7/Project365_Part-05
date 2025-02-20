import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "../styles/QRScanner.css";

const QRScanner = () => {
  const [scannedData, setScannedData] = useState("");
  const qrRef = useRef(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    });

    scanner.render(
      (decodedText) => {
        setScannedData(decodedText);
        scanner.clear(); // Stop scanning after a successful scan
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="qr-container">
      <h1>📷 QR Code Scanner</h1>
      <div id="reader" ref={qrRef}></div>
      {scannedData && (
        <div className="result">
          <h3>Scanned Data:</h3>
          <p>{scannedData}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
