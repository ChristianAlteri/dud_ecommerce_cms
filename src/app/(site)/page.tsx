import Image from "next/image";
import AuthForm from "./components/AuthForm";
import { useSession } from "next-auth/react";
import AdminEntryPoint from "./components/AdminEntryPoint";


export default function Home() {

  return (
    <>
      <AdminEntryPoint />
    </>
  );
}
