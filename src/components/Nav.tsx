import { useRouter } from "next/dist/client/router";
import React from "react";
import tw from "twin.macro";
import { Link } from "./Link";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Nav: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <nav tw="flex relative items-center justify-between w-full py-4">
      <Link href="/" css={[pathname !== "/" && tw`hidden sm:block`]}>
        <div tw="w-8 h-8 rounded-full bg-accent" />
      </Link>

      <div
        css={[
          tw`flex justify-between items-center space-x-6 relative sm:w-auto h-8`,
          pathname !== "/" && tw`w-full`,
        ]}
      >
        <NavLink href="/about" tw="">
          about
        </NavLink>

        <ThemeSwitcher />
      </div>
    </nav>
  );
};

const NavLink = tw(Link)`
  text-sm font-bold hover:text-accent
`;
