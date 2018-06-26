import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const headerStyle = {
  backgroundColor: "#3b1878",
}
const menuFont = {
  textAlign: "center",
  fontSize: "22px",
  fontWeight: "bold",
  color: "#fff"
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return ( 
        <AppBar position="static" style={headerStyle}>
          <Toolbar>
            <Typography variant="title" color="inherit">
              <span style={menuFont}>L <span style={{ color: "#4cd566" }}>e</span> o  S t o r e</span>
            </Typography>
          </Toolbar>
        </AppBar>
    );
  }
}

export default Navbar;
