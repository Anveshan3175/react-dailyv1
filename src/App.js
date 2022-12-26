import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sampleButton">Sample Button</Link>
        </li>
        <li>
          <Link to="/sampleInputText">Sample Input Text</Link>
        </li>
        <li>
          <Link to="/sampleSection">Sample Section</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
