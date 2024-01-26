import React, { useState } from 'react';
import './Table.scss';

const Table = ({ data }) => {
  const [inputVal, setInputVal] = useState(null);

  // Extract column headers from the first item in the data array
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  const handleSave = (rowId) => {
    const tmp = {};
    const editedData = data.reduce((acc, column, colIndex) => {
      // console.log(column);
      // const input = document.querySelector(`.rowIndex-${colIndex} td input`);
      // console.log("input: ", input);
      // console.log("rowId: ", rowId);
      // console.log(rowNum);
      if (column.id == rowId) {  
        // console.log(input);
        const inputData = document.querySelectorAll(`#id-${rowId} td input`);
        // console.log("inputData: ", inputData);
        inputData.forEach(inputElement => {
          // console.log("inputElement: ", inputElement);
          const key = inputElement.name;
          const value = inputElement.value;
          tmp[key] = value;
        });
      }
      return tmp;
    }, {});
    console.log("editedData: ", editedData);
  };

  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  

  return (
    <table className='Table'>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
          <th>수정</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} id={`id-${item.id}`} className={ `rowIndex-${rowIndex}`}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                <input type="text" name={column} id={`id-${item.id}`} className={`colIndex-${colIndex}`} defaultValue={item[column]} />
                {/* {item[column]} */}
              </td>
            ))}
            <td>
              <button onClick={() => handleSave(item.id)}>수정</button>
            </td>
            <td>
              <button>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
