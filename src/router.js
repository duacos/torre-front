import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./views/layouts/MainLayout.js";
import Beat from "./views/loaders/Beat.js";
const ProfileView = lazy(() => import("./views/profile/Profile.js"));
const HomeView = lazy(() => import("./views/home/Home.js"));

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
    <Suspense fallback={<Beat />}>
      <Switch>
        <LayoutComponent
          exact
          path="/profile/:username"
          component={ProfileView}
        />

        <LayoutComponent exact path="/" component={HomeView} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Router;
