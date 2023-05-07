import Logo from "../components/userCardComponents/Logo";
import Background from '../components/userCardComponents/Background';
import AvatarDecorLine from "../components/userCardComponents/AvatarDecor";
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
