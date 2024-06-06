import { getUserInfo, removeUser } from "@/services/auth.services";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const router = useRouter();

  const userInfo = getUserInfo();

  // console.log(userInfo);

  const handleLogOut = () => {
    removeUser();
    router.refresh();
  };

  return (
    <>
      {userInfo?.id ? (
        <Button onClick={handleLogOut} color="error">
          LogOut
        </Button>
      ) : (
        <Button component={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
