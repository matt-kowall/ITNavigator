import { ThemeProvider } from "./components/theme-provider";
import CreatingCV from "./components/creating-cv";
import LinkedInProfile from "./components/linked-profile";
import CertificatesOnResume from "./components/certificates-on-resume";
import UsefulCertificates from "./components/useful-certificates";

function App() {
  return (
    <ThemeProvider>
      <div className="flex flex-col items-center justify-center w-12/12 mx-auto">
        <CreatingCV />
        <LinkedInProfile />
        <CertificatesOnResume/>
        <UsefulCertificates/>
      </div>
    </ThemeProvider>
  );
}

export default App;
