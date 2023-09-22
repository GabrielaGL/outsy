import tailwindConfig from "../../tailwind.config";
import Link from "next/link";
import Image from "next/image";

import logo from ".//../assets/logoBlue.png";

export default function Home() {
  return (
    <nav className="pt-4 pl-2 pb-4 flex flex-row">
      <figure className="mr-80">
        <Image alt="Logo Outsy" src={logo} width="200" height="50" />
      </figure>

      <ul className="flex flex-row pt-6 ml-200">
        <li className="mx-7"> Información </li>
        <li className="mx-7"> Empresa </li>
        <li className="mx-7"> Blog </li>
      </ul>

      <div className="flex flex-row pt-4">
        <Link href="/login" className="mx-7">
          <button className="rounded-md bg-[#F542A7] decoration-white px-2 py-2 hover:bg-[#5CE1E6] ">
            {" "}
            Regístrate{" "}
          </button>
        </Link>

        <Link href="/login" className="mx-7">
          <button> Inicia Sesión </button>
        </Link>
      </div>

    </nav>
  );
}
