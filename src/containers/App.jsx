import React, { Component, Suspense } from "react";
// import loadable from "@loadable/component";
// import logo from "./logo.svg";
// import "./App.css";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Loading from "../components/Loading/Loading";
import NotFound from "../components/ErrorPages/NotFound/NotFound";
import InternalServer from "../components/ErrorPages/InternalServer/InternalServer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const LazyOwnerList = React.lazy(() => import("./Owner/OwnerList/OwnerList"));
const LazyOwnerDetails = React.lazy(() =>
  import("./Owner/OwnerDetails/OwnerDetails")
);

class App extends Component {
  render() {
    return (
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/owner-list" component={LazyOwnerList} />
              <Route path="/ownerDetails/:id" component={LazyOwnerDetails} />
              <Route path="/500" component={InternalServer} />
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
