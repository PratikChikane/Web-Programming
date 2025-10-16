import React, { useState } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Replace with your JSON URL
      const jsonData = await response.json();
      setData(jsonData);
      setShowTable(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <button onClick={fetchData}>Load Data</button>

      {showTable && (
        <table border="1" cellPadding="10" style={{ marginTop: '20px', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DataTable;
