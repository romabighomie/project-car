import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/home/HomePage";
import FavoritesPage from "./pages/favorites/FavoritesPage";
import ProfilePage from "./pages/profile/ProfilePage";
import NotFoundPage from "./pages/not-found/NotFoundPage";
import PrivateRoute from "./hoc/PrivateRoute";
import CashierPage from "./pages/cashier/CashierPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}/>
          <Route path="/favorites" element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }/>
          <Route path="/profile" element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }/>
          <Route path="/cashier" element={
            <PrivateRoute>
              <CashierPage />
            </PrivateRoute>
          }/>
          <Route path="*" element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;