import DailyStandartPage from "../pages/DailyStandartPage";
import IssuancePage from "../pages/IssuancePage";

export const router = [
  {
    path: '/',
    element: <DailyStandartPage/>
  },
  {
    path: '/issuance',
    element: <IssuancePage/>
  },
];