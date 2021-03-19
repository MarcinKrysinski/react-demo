import React from 'react';
import './App.css';
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
        <p>Hello!!!</p>

        <form>
            <div>
                <input type="number" placeholder="Amount" />
            </div>
            <div>
                <span>From:</span>
                <select>
                    <option value="PLN">PLN</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
            <div>
                <span>To:</span>
                <select>
                    <option value="PLN">PLN</option>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="GBP">GBP</option>
                </select>
            </div>
        </form>

    </div>
  );
}

export default App;
