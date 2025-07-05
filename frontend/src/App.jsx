import Header from "./components/Header";
import ProblemList from "./components/ProblemList";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <ProblemList />
      </div>
    </ThemeProvider>
  );
}

export default App;
