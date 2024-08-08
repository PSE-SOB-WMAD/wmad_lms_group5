import "./App.css";
import { Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/core/DashboardPage";
// import UserAccountPage from "./pages/userAccount/UserAccountPage";
import BookCatalogPage from "./pages/bookCatalog/BookCatalogPage";
import BookIssuePage from "./pages/bookIssue/BookIssuePage";
import LoginPage from "./pages/auth/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
// import UserAccountInfoPage from "./pages/userAccount/UserAccountInfoPage";
import CreateUserAccountListPage from "./pages/UserAcc/CreatUserAccountListPage"
import AppLayout from "./components/AppLayout";
import MemberPage from "./pages/member/MemberPage";
import ViewMember from "./pages/member/ViewMember";
import ExampleCreatePage from "./components/UpdateListMember";
import MembersPage from "./pages/member/MemberPage";

function App() {
  return (
    
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<AppLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/user-account">
          <Route index element={<CreateUserAccountListPage />} />
         
        </Route>
        <Route path="/book-catalog" element={<BookCatalogPage />} />
        <Route path="/book-issue" element={<BookIssuePage />} />
        <Route path="/member" element={<MemberPage />} />
        <Route path="/view-member/:id" element={<ViewMember />} />
        <Route path="/Update-member/:id" element={<ExampleCreatePage />} />

      </Route>
    </Routes>
    
  );
  
}

export default App;
