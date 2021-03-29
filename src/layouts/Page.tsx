import React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Props as SEOProps, SEO } from "../components/SEO";
import "twin.macro";

export interface Props {
  seo?: SEOProps;
}

export const Page: React.FC<Props> = props => {
  return (
    <>
      <SEO {...props.seo} />

      <div tw="flex flex-col max-w-3xl w-full px-6 mx-auto">
        <div tw="min-h-screen">
          <Nav />

          <main tw="flex-grow py-20 md:py-24 w-full mx-auto">
            {props.children}
          </main>
        </div>

        <Footer />
      </div>
    </>
  );
};
