import React from "react";
import { NextSeo } from "next-seo";

const Seo = () => {
  return (
    <NextSeo
      title="Annie Lesny"
      description="Annie Lesny description"
      canonical="https://devon-martin.now.sh/"
      openGraph={{
        url: "https://devon-martin.now.sh/",
        type: "website",
        locale: "en_IE",
        title: "Annie Lesny",
        description: "Annie Lesny description",
        site_name: "Annie Lesny",
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
