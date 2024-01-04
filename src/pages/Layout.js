import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  return (
    <>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <Navbar ></Navbar>
        </Box>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;