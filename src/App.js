import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Route, Switch } from "react-router-dom";
import WrappedHomeDashboard from './Components/Home/HomeDasboard';
import WrappedSubmissionsDashboard from "./Components/Submissions/SubmissionDashboard";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: "#fff",

    },
    secondary: {
      main: '#FFFFFF',
      contrastText: "#fff",
    },
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>

    <Switch>
      <Route path="/" exact component={WrappedHomeDashboard} />
      <Route path="/fcf-submission" exact component={WrappedSubmissionsDashboard} />
    </Switch>
    </ThemeProvider>
  );
}

export default App;
