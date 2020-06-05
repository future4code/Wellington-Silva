import React, { useState} from 'react';

// import { Container } from './styles';


function Items(props) {
  const { items, removeHandler } = props;
  const [item, setItem] = useState("");

  return (
    <>
      <ul>
        {items.map((text, index) => (
          <li
            key={index}
            onMouseOver={() => setItem(index + 1)}
            onMouseOut={() => setItem(null)}
          >
            {text + (index === 3 ? item : "")}
            <button onClick={() => removeHandler(index)}>
              Apagar
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");
  const [value, setValue] = useState('')
  

  const Criar = () =>{
    setItems(items => items.concat(text));
    setText("");
  }

  
  return (
    <div>
      <h1>Todo List</h1>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={Criar}>criar </button>

      <select name='dias' id='list'>
        <option value='1'>Segunda-feira</option>
        <option value='2'> Terça-feira</option>
        <option value='3'>Quarta-feira</option>
      </select>

      
      {
        <Items
          items={items}
          removeHandler={index =>
            setItems(items => items.filter((_, idx) => idx !== index))
          }
        />
      }
      
   
  </div>
  );
}

export default App