import React from "react";
import "./App.css";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Homepage } from "./layouts/Homepage/Homepage";
import { SearchProductsPage } from "./layouts/SearchProductsPage/SearchProductsPage";
import { Route, Switch, useHistory } from "react-router-dom";
import { ProductCheckoutPage } from "./layouts/ProductCheckoutPage/ProductCheckoutPage";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";
import { oktaConfig } from "./lib/oktaConfig";
import { Security, LoginCallback } from "@okta/okta-react";
import LoginWidget from "./Auth/LoginWidget";
import { RouteComponentProps } from "react-router-dom";

const oktaAuth = new OktaAuth(oktaConfig);

export const App = () => {
  const customAuthHandler = () => {
    history.push("/login");
  };

  const history = useHistory();

  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Security
        oktaAuth={oktaAuth}
        restoreOriginalUri={restoreOriginalUri}
        onAuthRequired={customAuthHandler}
      >
        <Navbar />
        <div className="flex-grow-1">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/Home" component={Homepage} />
            <Route path="/search" component={SearchProductsPage} />
            <Route path="/checkout/:bookId" component={ProductCheckoutPage} />
            <Route
              path="/login"
              component={(props: RouteComponentProps) => (
                <LoginWidget {...props} config={oktaConfig} />
              )}
            />
            <Route path="/login/callback" component={LoginCallback} />
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  );
};
