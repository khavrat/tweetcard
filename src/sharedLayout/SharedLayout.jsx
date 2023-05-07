import Logo from "../components/userCardComponents/topSection/Logo";
import Background from '../components/userCardComponents/topSection/Background';
import AvatarDecorLine from "../components/userCardComponents/topSection/AvatarDecor";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

function SharedLayout() {
  return (
    <>
      <Logo />
      <Background />
      <AvatarDecorLine/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default SharedLayout;
