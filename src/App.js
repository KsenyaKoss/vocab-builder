import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import RecommendPage from "./pages/RecommendPage/RecommendPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import PrivateRoute from "./HOC/PrivateRoute";
import PublicRoute from "./HOC/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import { getCurrentUserThunk } from "./redux/Auth/authOperations";
import Loader from "./components/Layout/Loader/Loader";
import { selectIsLoading } from "./redux/Auth/authSelectors";

const MainLayout = lazy(() =>
  import("./components/Layout/MainLayout/MainLayout")
);
const  RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getCurrentUserThunk());
  }, [dispatch]);

  return (
    isLoading ? <Loader/> :
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader/>}>
            <MainLayout />
          </Suspense>
        }
      >
        <Route
          path="register"
          element={
            <PublicRoute>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route
          path="dictionary"
          element={
            <PrivateRoute>
              <DictionaryPage />
            </PrivateRoute>
          }
        />
        <Route
          path="recommend"
          element={
            <PrivateRoute>
              <RecommendPage />
            </PrivateRoute>
          }
        />
        <Route
          path="training"
          element={
            <PrivateRoute>
              <TrainingPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
