import './App.css'
import { QRCodeCanvas } from "qrcode.react";

function App() {

  const appUrl = `${window.location.origin}/special-page`;

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Scansiona il QR Code</h1>
      <QRCodeCanvas 
        value={appUrl} 
        size={200}       // dimensioni in px
        bgColor="#ffffff" 
        fgColor="#000000"
        level="H"        // livello di correzione errore (L, M, Q, H)
        includeMargin={true}
      />
      <p>{appUrl}</p>
    </div>
  );
}

export default App
