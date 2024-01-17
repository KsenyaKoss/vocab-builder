import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DictionaryPage from "./pages/DictionaryPage/DictionaryPage";
import RecommendPage from "./pages/RecommendPage/RecommendPage";
import TrainingPage from "./pages/TrainingPage/TrainingPage";
import MainLayout from "./components/Layout/MainLayout/MainLayout";
import PrivateRoute from "./HOC/PrivateRoute";
import PublicRoute from "./HOC/PublicRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
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
