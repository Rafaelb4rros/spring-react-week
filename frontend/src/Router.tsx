import { Dashboard } from "pages/Dashboard";
import { Home } from "pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/dashboard" component={Dashboard} exact />
      </Switch>
    </BrowserRouter>
  );
}
