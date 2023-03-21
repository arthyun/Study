import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssignmentIcon from '@mui/icons-material/Assignment';

//add
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
import { NavLink } from 'react-router-dom';

//css
import '../App.css';



export default function ListItems(){

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClick1 = () => {
    setOpen1(!open1);
  };  
  const handleClick2 = () => {
    setOpen2(!open2);
  };


  return(
  <>
    <List component="nav">
        <NavLink className='navlink' to='/'>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="대시보드" />
          </ListItemButton>
        </NavLink>


        {/* 2depth */}
        <ListItemButton onClick={handleClick1}>
            <ListItemIcon>
            <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="관리자 기능" />
            {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink className='navlink' to='/user'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="SFTP 사용자 등록" />
                </ListItemButton>
              </NavLink>
            </List>
        </Collapse>
        <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="ADMIN 사용자 등록" />
              </ListItemButton>
            </List>
        </Collapse>
        <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="사용자 설정 관리" />
              </ListItemButton>
            </List>
        </Collapse>


        {/* 2depth */}
        <ListItemButton onClick={handleClick2}>
            <ListItemIcon>
              <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="컨텐츠 현황" />
            {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink className='navlink' to='/content'>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="트렌스코딩 이력" />
                </ListItemButton>
              </NavLink>
            </List>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="조회1" />
              </ListItemButton>
            </List>
        </Collapse>
        <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="조회2" />
              </ListItemButton>
            </List>
        </Collapse>

        <NavLink className='navlink' to='/Board'>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="게시판" />
          </ListItemButton>
        </NavLink>

      <Divider sx={{ my: 1 }} />
    </List>
  </>
  );
}