/* eslint-disable */

import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Datagrid from './components/Datagrid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

function App1() {
  const [data, setData] = useState([
    {
      seqNo: 2,
      fileName: 'sign.png',
      userId: 'test03',
      ingestTime: '3H',
      trStatus: 'error',
      progress: 55,
      startTransCoding: '2023-03-20T14:59:02',
      finishTransCoding: '2023-03-21T14:59:02'
    },
    {
      seqNo: 9,
      fileName: 'sign4.png',
      userId: 'test04',
      ingestTime: '3H',
      trStatus: 'error',
      progress: 15,
      startTransCoding: '2023-03-20T14:59:02',
      finishTransCoding: '2023-03-21T14:59:02'
    },
    {
      seqNo: 5,
      fileName: 'sign2.png',
      userId: 'test02',
      ingestTime: '3H',
      trStatus: 'error',
      progress: 95,
      startTransCoding: '2023-03-20T14:59:02',
      finishTransCoding: '2023-03-21T14:59:02'
    }
  ]);
  // const [result, setResult] = useState([]);

  // const bring = async () => {
  //   try {
  //     const response = await axios.get('http://133.186.247.57:8080/media');
  //     const res = response.data;
  //     setData(res.data);
  //   } catch(err) {
  //     console.log(`에러: ${err}`);
  //   }
  // } 

  // useEffect(() => {
  //   bring();
  // }, []);

  //쿠키를 생성(로그인할때 값 조회 성공하면 토큰값을 받아와 저장)
  const onCookie = () => {
    //15분 설정하자
    // var inFifteenMinutes = new Date(new Date().getTime() + 15 * 60 * 1000);
    //객체로 쿠키에 저장하긴 힘든듯...
    // Cookies.set('Token', data, {expires: inFifteenMinutes});
    // const Cookie = Cookies.get();
    // console.log(Cookie);
    
    data.forEach((el, i) => {
      el.id = i;
    })

    console.log(data);
  }

  //쿠키를 삭제(로그아웃 시 이용)
  const onCookieDelete = () => {
    Cookies.remove('Token');
    const Cookie = Cookies.get('Token');
    console.log(Cookie);
  }


  return (
    <div className="App">
      <section className="App-Section">
        <Datagrid rows={data} />

        <br/>

        <div>
          <button onClick={onCookie}>쿠키 Make</button>
          <button onClick={onCookieDelete}>쿠키 Destroy</button>
        </div>
      </section>
    </div>
  );
}

// export default App1;

const columns = [
  { field: 'seqNo', headerName: 'seqNo', width: 90 },
  {
    field: 'fileName',
    headerName: 'fileName',
    width: 150,
    editable: true,
  },
  {
    field: 'userId',
    headerName: 'userId',
    width: 150,
    editable: true,
  },
  {
    field: 'ingestTime',
    headerName: 'ingestTime',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'trStatus',
    headerName: 'trStatus',
    width: 150,
    editable: true,
  },
  {
    field: 'progress',
    headerName: 'progress',
    width: 150,
    editable: true,
  },
  {
    field: 'startTransCoding',
    headerName: 'startTransCoding',
    width: 150,
    editable: true,
  },
  {
    field: 'finishTransCoding',
    headerName: 'finishTransCoding',
    width: 150,
    editable: true,
  },
];

// const rows = [
//     {   
//         id: 1,
//         seqNo: 2,
//         fileName: "sign.png",
//         userId: "test03",
//         ingestTime: "3H",
//         trStatus: "error",
//         progress: "55",
//         startTransCoding: "2023-03-20T14:59:02",
//         finishTransCoding: "2023-03-21T14:59:02",
//     }
// ];

// export default function Datagrid(props) {
//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={props.rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }