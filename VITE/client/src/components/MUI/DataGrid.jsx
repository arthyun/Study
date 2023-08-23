import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ReactDOM from 'react-dom/client';
import PopupCompo from './PopupCompo';

// 컴포넌트 생성
const CountButton = ({ count, setCount }) => {
  return <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>;
};
const DataList = ({ selectedValue, handleInputChange }) => {
  return (
    <div>
      <label htmlFor="numbers">Select</label>
      <input type="text" list="list" id="numbers" value={selectedValue} onChange={handleInputChange} />
      <datalist id="list">
        <option value="1" />
        <option value="2" />
        <option value="3" />
        <option value="4" />
        <option value="5" />
        <option value="6" />
      </datalist>
    </div>
  );
};

export default function DataGridMain() {
  // 컴포넌트들에 전달할 States
  const [count, setCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: false,
      renderCell: () => <CountButton count={count} setCount={setCount} />
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: false,
      renderHeader: () => <DataList selectedValue={selectedValue} handleInputChange={handleInputChange} />
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: false
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`
    }
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
  ];

  // 클릭 시 윈도우 팝업 발생
  const onClickPopup = (params) => {
    const popupWindow = window.open('', '_blank', 'width=500, height=500');
    const popupDocument = popupWindow.document;

    popupDocument.write('<html><body><div id="popup-root"></div></body></html>');

    const popupRoot = ReactDOM.createRoot(popupDocument.getElementById('popup-root'));
    popupRoot.render(<PopupCompo params={params} />);
  };

  const handleConfirm = () => {
    console.log('선택된 값:', selectedValue);
  };

  return (
    <>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5
              }
            }
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
          //   onCellDoubleClick={(params, event, details) => onCellDoubleClick(params, event, details)}
          onCellDoubleClick={(params, event, details) => onClickPopup(params)}
        />
      </Box>

      <button onClick={handleConfirm}>Confirm</button>

      {/* <div className="onClickViewZone">
        <Outlet />
      </div> */}
    </>
  );
}
