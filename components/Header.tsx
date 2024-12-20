import Image from "next/image";
import React from "react";

import { signOutUser } from "@/lib/action/user.actions";

import FileUploader from "./FileUploader";
import Search from "./Search";



const Header = () => {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader  />
        <form
          action={async () => {
            "use server";
            await signOutUser();
          }}
        >

          <button type="submit" className="sign-out-button">
            <Image
              src="assets/icons/logout.svg"
              alt="logo"
              width={24}
              height={24}
              className="w-6"
            />
          </button>

          

        </form>
      </div>
    </header>
  );
};

export default Header;
