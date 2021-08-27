import Container from "@material-ui/core/Container";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container maxWidth="md" component="main">
        <Switch>
          <Route path="/add-property">
            <AddProperty />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
