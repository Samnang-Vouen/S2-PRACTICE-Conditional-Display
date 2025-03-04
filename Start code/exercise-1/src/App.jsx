import Header from "./components/Header";
import Score from "./components/Score";
import { JAVA_RESULTS, PYTHON_RESULTS, HTML_RESULTS, ENGLISH_RESULTS} from "./data";

function App() {
  return (
    <>
      <Header batchName="PNC batch 2025"/>
      <main className="scores-container">
        <Score courseName="Java" result={JAVA_RESULTS}/>
        <Score courseName="Python" result={PYTHON_RESULTS}/> 
        <Score courseName="HTML" result={HTML_RESULTS}/>
        <Score courseName="English" result={ENGLISH_RESULTS}/>
      </main>
    </>
  );
}

export default App;
