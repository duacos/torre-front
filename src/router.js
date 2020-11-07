import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./views/layouts/MainLayout.js";

const ProfileView = lazy(() => import("./views/profile/Profile.js"));

const LayoutComponent = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<h1>Loading</h1>}>
      <Switch>
        <LayoutComponent
          exact
          path="/profile/:username"
          component={ProfileView}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
