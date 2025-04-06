import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function UsefulCertificates() {
  return (
      <div className="flex flex-col items-center justify-center w-3/4 my-5">
        <h1 className="text-3xl font-bold mb-6">Jakie certyfikaty mogą być przydatne?</h1>
        <Card className="w-3/4">
          <CardHeader>
            <CardTitle>Krok 1: Rozważ swoją ścieżkę kariery w IT</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Branża IT oferuje wiele możliwości zawodowych, które różnią się wymaganymi umiejętnościami i specjalizacjami. Wybór odpowiedniej ścieżki powinien zależeć od Twoich zainteresowań, predyspozycji oraz aktualnych trendów na rynku pracy. Oto najważniejsze kierunki w IT:

- **Frontend Developer** - zajmuje się tworzeniem interfejsów użytkownika w aplikacjach webowych i mobilnych. Kluczowe technologie: HTML, CSS, JavaScript, React, Angular, Vue.js.
- **Backend Developer** - odpowiedzialny za logikę działania aplikacji i przetwarzanie danych na serwerze. Kluczowe technologie: Node.js, Python (Django, Flask), Java (Spring), PHP, Ruby on Rails.
- **Full-Stack Developer** - łączy umiejętności frontendowe i backendowe, tworząc kompletne aplikacje webowe.
- **DevOps Engineer** - specjalizuje się w automatyzacji, zarządzaniu infrastrukturą i wdrażaniu aplikacji. Kluczowe technologie: Docker, Kubernetes, CI/CD, AWS, Azure.
- **Cloud Engineer** - zajmuje się architekturą chmurową i zarządzaniem infrastrukturą w chmurze (AWS, Google Cloud, Azure).
- **Data Scientist / Data Analyst** - analizuje dane, tworzy modele predykcyjne i wizualizuje wyniki. Kluczowe technologie: Python (Pandas, NumPy, TensorFlow), SQL, R.
- **Cybersecurity Specialist** - dba o bezpieczeństwo systemów, sieci i aplikacji. Kluczowe technologie: Kali Linux, SIEM, firewalle, szyfrowanie, pentesting.
- **AI & Machine Learning Engineer** - tworzy modele sztucznej inteligencji i systemy uczące się. Kluczowe technologie: TensorFlow, PyTorch, scikit-learn.
- **Game Developer** - programuje gry komputerowe, często z użyciem silników Unity lub Unreal Engine.
- **Software Tester (QA Engineer)** - testuje oprogramowanie, automatyzuje testy i raportuje błędy. Kluczowe narzędzia: Selenium, Jest, Cypress.
</p>
          </CardContent>
          <CardHeader>
            <CardTitle>Krok 2: Uniwersalne platformy i kursy IT</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Niezależnie od wybranej specjalizacji, kluczowe jest zdobywanie nowych umiejętności. Oto najlepsze platformy i kursy dla osób rozwijających się w IT:

- **Udemy** - ogromny wybór kursów IT, w tym programowanie, DevOps, analiza danych, cyberbezpieczeństwo.
- **Coursera** - kursy prowadzone przez uniwersytety i firmy technologiczne (Google, IBM, Meta), np. kursy Data Science, Cloud Computing, Cybersecurity.
- **edX** - wysokiej jakości kursy akademickie dotyczące programowania, sztucznej inteligencji i analizy danych.
- **Pluralsight** - specjalistyczne kursy dla programistów, DevOps i specjalistów IT.
- **Codecademy** - interaktywne kursy programowania w JavaScript, Pythonie, SQL, Java.
- **The Odin Project** - darmowy kurs Full-Stack Development (HTML, CSS, JavaScript, React, Node.js).
- **CS50 (Harvard)** - darmowy kurs podstaw informatyki, świetny dla początkujących.
- **freeCodeCamp** - darmowe kursy i projekty związane z frontendem, backendem i analizą danych.

Najbardziej przydatne kursy IT:

1. **Podstawy programowania** - CS50 (Harvard), Python for Beginners (Udemy).
2. **Web Development** - The Odin Project, Full-Stack Web Development (Coursera).
3. **DevOps i chmura** - AWS Certified Cloud Practitioner (Udemy), Docker & Kubernetes (Pluralsight).
4. **Analiza danych i ML** - Data Science with Python (Coursera), Machine Learning by Andrew Ng (Stanford).
5. **Cybersecurity** - Introduction to Cyber Security (Coursera), Ethical Hacking (Udemy).
6. **Testowanie oprogramowania** - Software Testing and Automation (Pluralsight).

Te kursy pomogą w rozwoju umiejętności technicznych i zdobyciu pracy w branży IT. Warto regularnie aktualizować swoją wiedzę i zdobywać certyfikaty, które zwiększają atrakcyjność na rynku pracy.
</p>
          </CardContent>
        </Card>
      </div>
  );
}

export default UsefulCertificates;