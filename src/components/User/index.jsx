import { FaUserCircle } from "react-icons/fa";
import { useRouter } from "next/router";
import * as Styled from "./index.styled";
import { useUser } from "@auth0/nextjs-auth0/client";

const User = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) {
    return (
      <Styled.Profile
        onClick={() => {
          router.push("/api/auth/login");
        }}
      >
        <FaUserCircle />
        <h3>Login</h3>
      </Styled.Profile>
    );
  }
  return (
    <Styled.Profile
      onClick={() => {
        router.push("/profile");
      }}
    >
      <img src={user?.picture} alt={user.name} />
      <h3>{user.name}</h3>
    </Styled.Profile>
  );
};

export default User;