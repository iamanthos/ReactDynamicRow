import React, { useState, useEffect } from 'react';
import './style.css';
import { DataTable } from 'react-native-paper';

export default function App() {
  const [pairState, setPairState] = useState([]);
  const [countAdd, setCountAdd] = useState(0);
  var show = true;

  // useEffect(() => {}, [pairState]);

  const pair = {
    id: countAdd,
    key: 1,
    description: 'desc' + countAdd,
    value: 'value' + countAdd,
  };

  const addHandler = () => {
    console.log('countAddBefore', countAdd);

    setCountAdd((prev) => prev + 1);
    console.log('countAddAfter', countAdd);
    const pairArray = [];
    pairArray.push(pair);
    console.log('pair', pair);
    setPairState(pairState.concat(pairArray));
  };

  // const deleteHandler = (id) => {
  //   console.log('id', id);

  //   let a = [...pairState];
  //   console.log('a', a);

  //   const reducedArr = a.filter((item, itemIndex) => {
  //     console.log('item.id', item.id);
  //     if (item.id !== id) return item;
  //   });
  //   console.log('reducedArr', reducedArr);
  //   setPairState(reducedArr);

  // };

  const deleteHandler = (id) => {
    console.log('id', id);

    let a = [...pairState];
    console.log('a', a);

    // const indexA = a.indexOf(id);

    // let ind = a.findIndex((item, i) => {
    //   console.log('item.id', item.id);
    //   console.log('id', id);
    //   console.log(a);
    //   if (item.id == id) {
    //     console.log('here');
    //     console.log("i here", i)
    //     console.log(item);
    //     return i;
    //   }
    // });

    let ind = a.findIndex((item, i) => item.id == id);

    console.log('indexA', ind);
    a.splice(ind, 1);

    console.log('a', a);
    setPairState(a);
  };

  console.log('pairState', pairState);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Key</th>
            <th>Value</th>
            <th>Description</th>
            <th>
              <input type="button" value="Add" onClick={addHandler} />
            </th>
          </tr>
        </thead>
        <tbody>
          {console.log('pairStateInBody', pairState)}
          {pairState &&
            pairState.map((pair, i) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="text" placeholder="Key" aria-label="Key" />
                  </td>
                  <td>
                    <input type="text" placeholder="Value" aria-label="Value" />
                  </td>
                  <td>
                    <input
                      type="text"
                      placeholder="Description"
                      aria-label="Description"
                      value={pair.value}
                    />
                  </td>
                  <td>
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteHandler(pair.id)}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
