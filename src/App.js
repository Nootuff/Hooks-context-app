import './styles/App.css';
import Form from "./components/Form";
import Navbar from "./components/Navbar";

//import PageContent from "./components/PageContent";
import ThemeProvider from "./contexts/ThemeContext";

import LanguageProvider from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider> {/*Anything wrapped by these context providers will have access to the state contained within the providers.*/}
      <LanguageProvider>
      <Navbar />
        <Form />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
