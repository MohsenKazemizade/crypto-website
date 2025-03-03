import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "../routes";
import HomePage from "../Pages/HomePage/Index";
import CryptoDetailsPage from "../Pages/CryptoDetailsPage/Index";
import ExchangePage from "../Pages/ExchangePage/Index";
import RankingsPage from "../Pages/RankingsPage/Index";
import LoginPage from "../Pages/Auth/LoginPage/Index";
import SignupPage from "../Pages/Auth/SignupPage/Index";
import ExchangeMarketDetailsPage from "../Pages/ExchangeMarketDetailsPage/Index";
import DashboardPage from "../Pages/DashboardPage/Index";
import PrimaryLayout from "../Layouts/PrimaryLayout/Index";
import AuthLayout from "../Layouts/AuthLayout/Index";
import SecondaryLayout from "../Layouts/SecondaryLayout/Index";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrimaryLayout />}>
          <Route element={<SecondaryLayout />}>
            <Route path={ROUTES.HOME_PAGE} element={<HomePage />} />
            <Route path={ROUTES.EXCHANGE_PAGE} element={<ExchangePage />} />
          </Route>
          <Route path={ROUTES.RANKINGS_PAGE} element={<RankingsPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN_PAGE} element={<LoginPage />} />
          <Route path={ROUTES.SIGNUP_PAGE} element={<SignupPage />} />
        </Route>
        <Route
          path={ROUTES.CRYPTO_DETAILS_PAGE}
          element={<CryptoDetailsPage />}
        />
        <Route
          path={ROUTES.EXCHANGE_MARKET_DETAILS_PAGE}
          element={<ExchangeMarketDetailsPage />}
        />
        <Route path={ROUTES.DASHBOARD_PAGE} element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
