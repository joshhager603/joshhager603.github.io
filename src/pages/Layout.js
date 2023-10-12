import { Outlet } from "react-router-dom";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = (props) => {
  let navigate = useNavigate();
  const home = () => {
    navigate("/");
  }
  return (
    <>
      <nav>
        <Box sx={{ flexGrow: 1 }}>
          <Navbar onClick={home}></Navbar>
        </Box>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;