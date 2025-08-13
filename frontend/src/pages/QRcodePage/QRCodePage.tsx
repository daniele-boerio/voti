import { QRCodeCanvas } from 'qrcode.react';
import './qrcodepage.scss';

export default function MyQRCodePage() {
  const hostname = window.location.hostname; // es. "192.168.1.100" o "localhost"
  const port = window.location.port || '5173'; // prende la porta corrente
  const route = '/login';

  const url = `http://${hostname}:${port}${route}`;

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Scansiona il QR Code</h1>
      <QRCodeCanvas
        value={url}
        size={400}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin={true} // marginSize non esiste, in qrcode.react si usa includeMargin
      />
    </div>
  );
}
