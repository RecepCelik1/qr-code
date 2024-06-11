import QRcodeGenerator from "./components/QRcodeGenerator";
import App from "./components/app";

export default function Home() {


  return (
    <div className="flex flex-col sm:flex-row min-h-screen items-center p-3 bg-gray-800">
      <App/>
      <QRcodeGenerator/>
    </div>
  );
}
