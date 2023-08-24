import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import ReactDOM from 'react-dom/client';
import PopupCompo from './PopupCompo';
import { useForm } from 'react-hook-form';

// 컴포넌트 생성
const CountButton = ({ count, setCount }) => {
  return (
    <button type="button" onClick={() => setCount((prev) => prev + 1)}>
      {count}
    </button>
  );
};
const DataList = ({ register }) => {
  return (
    <div>
      <input type="text" list="list" {...register('numbers')} />
      <datalist id="list">
        <option value="아야" />
        <option value="어여" />
        <option value="오요" />
        <option value="우유" />
        <option value="이이" />
        <option value="야야" />
      </datalist>
    </div>
  );
};

export default function DataGridMain() {
  const { register, handleSubmit } = useForm();

  const [count, setCount] = useState(0);

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
      editable: true,
      renderHeader: () => <DataList register={register} />
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
      renderCell: (params) => (params.row.id === 1 ? <input type="checkbox" /> : params.row.age)
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

  // 헤더 그룹짓기
  const columnGroupingModel = [
    {
      groupId: '1번 그룹',
      description: '',
      children: [{ field: 'id' }]
    },
    {
      groupId: '2번 그룹',
      children: [
        {
          groupId: '2-1번 그룹',
          children: [{ field: 'lastName' }, { field: 'firstName' }]
        },
        { field: 'age' }
      ]
    },
    {
      groupId: '3번 그룹',
      children: [{ field: 'fullName' }]
    }
  ];

  // 클릭 시 윈도우 팝업 발생
  // const onClickPopup = (params) => {
  //   const popupWindow = window.open('', '_blank', 'width=500, height=500');
  //   const popupDocument = popupWindow.document;

  //   popupDocument.write('<html><body><div id="popup-root"></div></body></html>');

  //   const popupRoot = ReactDOM.createRoot(popupDocument.getElementById('popup-root'));
  //   popupRoot.render(<PopupCompo params={params} />);
  // };

  const newRowData1 = [];

  const getNewRowData = (params) => {
    params.forEach((item) => {
      newRowData1.push({
        id: rows[item - 1].id,
        lastName: rows[item - 1].lastName,
        firstName: rows[item - 1].firstName,
        age: rows[item - 1].age,
        madeIn: 'hyunho'
      });
    });
  };

  const handleConfirm = (form_data) => {
    // if (selectedValue === '') {
    //   alert('값이 비었으니 확인 바람!');
    // } else {
    //   console.log('선택된 값:', selectedValue);
    // }
    newRowData1.forEach((item) => {
      item.numbers = form_data.numbers;
    });
    console.log(newRowData1);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleConfirm)}>
        <Box sx={{ height: 550, width: '100%' }}>
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
            // onCellDoubleClick={(params, event, details) => onClickPopup(params)} // 더블클릭 시 팝업 노출
            experimentalFeatures={{ columnGrouping: true }} // 그룹 기능 사용하려면
            columnGroupingModel={columnGroupingModel}
            processRowUpdate={(updatedRow, originalRow) => {
              console.log('업데이트된 값:', updatedRow);
              console.log('기존값:', originalRow);
            }} // 수정한 cell 값 반영
            // onProcessRowUpdateError={}
            onRowSelectionModelChange={getNewRowData} // 선택한 id 값으로 로우 전체 데이터를 구하기
          />
        </Box>

        <button type="submit">Confirm</button>
      </form>
      {/* <div className="onClickViewZone">
        <Outlet />
      </div> */}
    </>
  );
}
