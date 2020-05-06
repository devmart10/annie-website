import React from "react";
import { NextSeo } from "next-seo";

const Seo = () => {
  return (
    <NextSeo
      title="Tailwind Template"
      description="Tailwind Template description"
      canonical="https://devon-martin.now.sh/"
      openGraph={{
        url: "https://devon-martin.now.sh/",
        type: "website",
        locale: "en_IE",
        title: "Tailwind Template",
        description: "Tailwind Template description",
        site_name: "Tailwind Template",
      }}
      twitter={{
        handle: "@devmart10",
        site: "@devmart10",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
