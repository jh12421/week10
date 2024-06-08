document.addEventListener('DOMContentLoaded', () => {
  // get the add button and the table element
  const addButton = document.getElementById('add');
  const listTable = document.getElementById('list');
    // add event listener to add button
  addButton.addEventListener('click', () => {
    // Get values from the input fields
    const date = document.getElementById('date').value;
    const liftType = document.getElementById('lift-type').value;
    const oldMaxWeight = document.getElementById('old-max-weight').value;
    const newMaxWeight = document.getElementById('new-max-weight').value;

    // Check if any of the fields are empty
    if (!date || !liftType || !oldMaxWeight || !newMaxWeight) {
      alert('Please fill in all fields');
      return;
    }

    // Create a new row
    const row = document.createElement('tr');

    // Create and append new data
    const dateCell = document.createElement('td');
    dateCell.textContent = date;
    row.appendChild(dateCell);
    // lift type
    const liftTypeCell = document.createElement('td');
    liftTypeCell.textContent = liftType;
    row.appendChild(liftTypeCell);
    // old max weight
    const oldMaxWeightCell = document.createElement('td');
    oldMaxWeightCell.textContent = oldMaxWeight;
    row.appendChild(oldMaxWeightCell);
    // new max weight
    const newMaxWeightCell = document.createElement('td');
    newMaxWeightCell.textContent = newMaxWeight;
    row.appendChild(newMaxWeightCell);

    // Create delete button 
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'btn btn-danger';
    deleteButton.addEventListener('click', () => {
      listTable.deleteRow(row.rowIndex);
    });
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    // Append the row to the table
    listTable.appendChild(row);

    // Clear the input fields
    document.getElementById('date').value = '';
    document.getElementById('lift-type').value = '';
    document.getElementById('old-max-weight').value = '';
    document.getElementById('new-max-weight').value = '';
  });
});
