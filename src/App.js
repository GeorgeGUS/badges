import React from "react";
import SheetA4 from "./components/SheetA4";
import "./styles/App.css";
import data from "./data";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SheetA4 initialData={data} />
      </div>
    );
  }
}

export default App;
