import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from '@mui/material/Button';

const HOC = (Component) => {
  return class extends React.Component {
    
    render() {
      return (
        <Box sx={{ display: "flex", minHeight: "95vh" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <img onClick={()=>{this.props.history.push("/")}} style={{ cursor: 'pointer'}} src="https://images.squarespace-cdn.com/content/v1/5ff3d364c1efcb66c7850e97/1609816000449-XSZJKT9MBPNA4P3U6TDA/CALGARY+BARBELL+white.png?format=1500w" alt="Convoy Software Logo" width="100" height="50" />
                <Button color="secondary" size="small" style={{color:"black"}} variant="contained" onClick={()=>{this.props.history.push("fcf-submission")}}>Submit Form Check</Button>
              </Box>
            </Toolbar>
          </AppBar>
          <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            <Toolbar sx={{ flex: 0 }} />

            <Component sx={{ flex: 1 }} {...this.props} />
          </Box>
        </Box>
      );
    }
  };
};

export default HOC;
