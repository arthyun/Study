// import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { withStyles, ThemeProvider } from '@mui/styles';



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


const customers = [
  {
    id: 1,
    image: 'http://placeimg.com/64/64/any',
    name: '홍길동',
    birthday: '961222',
    gender: '200',
    job: '대학생'
  },
  {
    id: 2,
    image: 'http://placeimg.com/64/64/any',
    name: '김김김',
    birthday: '931222',
    gender: '200',
    job: '프로그래머'
  },
  {
    id: 3,
    image: 'http://placeimg.com/64/64/any',
    name: '손손손',
    birthday: '981222',
    gender: '200',
    job: '의사'
  }
]

function App() {
  const classes = styles();

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
