import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login/login";
import DefaultLayout from "./Components/SideBar/DefaultLayout";
import Category from "./Components/AI_category/category"
import SignUp from "./Components/SingUp/singup"
import Chart from "./Components/DashBoard/linechart"

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/login" element={<Login />} />

      <Route path="/category" element={<DefaultLayout><Category /></DefaultLayout>} />

      <Route path="/another-route" element={<DefaultLayout><div>ne 123</div></DefaultLayout>} />

      <Route path="/singup" element={<SignUp />} />

      <Route path="/dashboard" element={<DefaultLayout><Chart /></DefaultLayout>} />

      <Route path="*" element={<DefaultLayout><div>No such directory</div></DefaultLayout>} />
    </Routes>
  );
};



export default Routing;
