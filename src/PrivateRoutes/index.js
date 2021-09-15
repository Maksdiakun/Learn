import React, { useRef, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { mainRefAction } from "../store/general/general.actions";
import ViewPage from "../pages/ViewPage";
import HomePage from "../pages/HomePage";
import Header from "../components/headerComponents/Header";
import Menu from "../components/menuComponents/Menu";
import SheetsPage from "../pages/SheetsPage";
import SearchPage from "../pages/SearchPage";
import LibraryPage from "../pages/LibraryPage";

const PrivateRoutes = () => {
  const dispatch = useDispatch();
  const mainRef = useRef(null);
  const mobile = window.innerWidth < 768;

  useEffect(() => {
    dispatch(mainRefAction(mainRef.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainRef]);

  return (
    <>
      {!mobile && <Menu />}
      <main ref={mainRef}>
        <Header mobile={mobile} />
        <Switch>
          <Route exact path="/view/:id" component={ViewPage} />
          <Route exact path="/sheets" component={SheetsPage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/library" component={LibraryPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </main>
    </>
  );
};

export default PrivateRoutes;
