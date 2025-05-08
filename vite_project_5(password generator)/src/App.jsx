
import { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()";

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className='w-full rounded-lg bg-gray-800 max-w-md mx-auto px-4 py-3 mt-5 text-white'>
      <h1 className='text-4xl text-center my-3'>Password Generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3 bg-white text-black'
          placeholder='Password'
          readOnly
        />
        <button
          onClick={copyPassword}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >COPY</button>
      </div>

      <div className='flex text-sm gap-x-2 flex-wrap'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setlength(Number(e.target.value))}
          />
          <label>Length: {length}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={numberAllowed}
            id='numberInput'
            onChange={() => setnumberAllowed(prev => !prev)}
          />
          <label htmlFor="numberInput">Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            checked={charAllowed}
            id='charInput'
            onChange={() => setcharAllowed(prev => !prev)}
          />
          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
