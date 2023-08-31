import React, { useEffect } from "react";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";
import axios from "./api/axios";
import { useDispatch } from "react-redux";
import { setToken } from "./redux/config/rootReducer";
import useAxiosPrivate from "./hooks/useAxiosPrivate";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/auth/auto-sign-in")
      .then(({ headers }) => {
        console.log(headers, "auto-sign-in");
        dispatch(setToken(headers.authorization));
      })
      .catch((err) => {
        // err.status==401 로그아웃
        dispatch(setToken(""));
        console.log(err, "auto sign-in failed");
      });
  }, []);

  return <RouterProvider router={Router} />;
};

export default App;
