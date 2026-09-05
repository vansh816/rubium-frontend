import AppRoutes from "./routes/AppRoutes";
import WhatsAppButton from "./components/WhatsAppButton";
import "./styles/whatsapp.css";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <>
      <AppRoutes />
      <WhatsAppButton />
      <Chatbot />
    </>
  );
}

export default App;