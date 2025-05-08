import { useState } from 'react'
import './App.css'
import { InputBox } from './Components'
import useCurrencyinfo from './hook/useCurrencyinfo'

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyinfo = useCurrencyinfo(from);
  const options = Object.keys(currencyinfo);

  const swap = () => {
    const temp = from;
    setfrom(to);
    setto(temp);
    setamount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyinfo[to]);
  };

  return (
    <div
      className='w-full text-black h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
      }}
    >
      <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setfrom(currency)}
              selectCurrency={from}
              onAmountChange={(value) => setamount(value)}
            />
          </div>

          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setto(currency)}
              selectCurrency={to}
              amountDisable
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
