import {useState} from 'react'
function Doubler() {
  const [n, setN] = useState(5);
  function handleClick() {
    setN(n * 2);
    setN(n * 2);
  }
  return (
    <div>
      <p>{n}</p>
      <button onClick={handleClick}>Double</button>
    </div>
  );
}
export default Doubler