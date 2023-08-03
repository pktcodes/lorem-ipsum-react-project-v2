import { useState } from 'react';

import data from './data';

const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  console.log(count);

  return (
    <section className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <form className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          min="1"
          step="1"
          max="9"
          id="amount"
          name="amount"
          value={count}
          onChange={(event) => {
            setCount(event.target.value);
          }}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
    </section>
  );
};
export default App;
