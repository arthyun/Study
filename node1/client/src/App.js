// import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { withStyles, ThemeProvider } from '@mui/styles';
import { useEffect, useState } from 'react';



const styles = theme => ({
  root: {
    width: '100%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})


function App() {
  const classes = styles();

  //data 담을곳
  const [customers, setCustomers] = useState([]);

  const callApi = async () => {
    const response = await fetch('http://localhost:5000/api/customers');
    const body = await response.json();
    return body;
  }

  //페이지 접속 후 데이터 불러옴
  useEffect(() => {
    callApi()
    .then(res => setCustomers(res))
    .catch(err => console.log(err));
  }, [])

  console.log(customers);


  return (
    <ThemeProvider style={classes.root}>
    <Paper style={{ width: '100%' }}>
        <Table style={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map((lists, i) => {
                return (
                  <Customer key={i}
                    id={lists.id}
                    image={lists.image}
                    name={lists.name} 
                    birthday={lists.birthday} 
                    gender={lists.gender} 
                    job={lists.job} />
                  )
              })
            }
          </TableBody>
        </Table>
    </Paper>
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
