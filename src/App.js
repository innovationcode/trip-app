import "./App.css";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";

import { CssBaseline, Grid } from "@material-ui/core";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid
        container
        soacing={3}
        style={{ width: "100%", backgroundColor: "cyan" }}
      >
        <Grid item xs={12} md={4} style={{ backgroundColor: "lightPink" }}>
          <List />
        </Grid>
        <Grid item xs={12} md={8} style={{ backgroundColor: "lightYellow" }}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
};

export default App;
