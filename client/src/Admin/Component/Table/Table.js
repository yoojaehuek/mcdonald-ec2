import React, { useState } from 'react';
import './Table.scss';

const Table = ({ data }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [inputVal, setInputVal] = useState(null);

  // Extract column headers from the first item in the data array
  const columns = data.length > 0 ? Object.keys(data[0]) : [];

  const handleEdit = (rowIndex) => {
    // Set the editingRow state to the index of the row being edited
    setEditingRow(rowIndex);
  };

  const handleSave = (rowIndex) => {
    const tmp = {};
    const editedData = data.reduce((acc, column, colIndex) => {
      const input = document.querySelector(`.rowIndex-${colIndex} td input`);
      if (input.value == rowIndex+1) {  
        const inputData = document.querySelectorAll(`.rowIndex-${rowIndex} td input`);
        inputData.forEach(inputElement => {
          const key = inputElement.name;
          const value = inputElement.value;
          tmp[key] = value;
        });
      }
      return tmp;
    }, {});
    console.log("editedData: ", editedData);
    setEditingRow(null);
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
          <tr key={rowIndex} className={editingRow === rowIndex ? `rowIndex-${rowIndex} editing` : `rowIndex-${rowIndex}`}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
                <input type="text" name={column} className={`colIndex-${colIndex}`} defaultValue={item[column]} />
                {/* {item[column]} */}
              </td>
            ))}
            <td>
              {editingRow === rowIndex ? (
                  <button onClick={() => handleSave(rowIndex)}>저장</button>
                ) : (
                  <button onClick={() => handleEdit(rowIndex)}>수정</button>
              )}
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
