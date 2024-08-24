import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const PrivateRoutes = () => {
  const { currentUser } = useSelector((state) => state.user);

  return currentUser ? <DashboardLayout /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
