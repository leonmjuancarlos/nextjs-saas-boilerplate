import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from './components/buttons';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from './components/user';

export default async function Home() {

  // SERVER-SIDE COMPONENT SESSION DATA
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <div>
        <LoginButton />
        <RegisterButton />
        <LogoutButton />
        <ProfileButton />

        <h1>Server Session</h1>
        <pre>{JSON.stringify(session)}</pre>

        <User/>
      </div>
    </main>
  );
}
