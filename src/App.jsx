import { useState } from "react";
import "./App.css";
import { data } from "./data";

function App() {
  const [list, setList] = useState(data);

  const sortByViews = () => {
    const newList = [...data].sort((a, b) => {
      if (b.views !== a.views) {
        return b.views - a.views; 
      }
    });
    setList(newList);
  };

  const sortByDate = () => {
    const newList = [...data].sort((a, b) => {
      if (new Date(b.date) - new Date(a.date) !== 0) {
        return new Date(b.date) - new Date(a.date); 
      } else {
        return b.views - a.views; 
      }
    });
    setList(newList);
  };

  return (
    <div>
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
