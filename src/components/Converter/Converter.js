import React from 'react';

function Converter(){
    return(
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
    );
}

export default Converter;
