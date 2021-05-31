import React from "react";

export const GA_GLOBAL = "G-KQ0CF2DZMP";

const GA_CODE = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${GA_GLOBAL}');`;

const ThirdPartyAnalytics = () => (
  <div id="analytics">
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_GLOBAL}`}
    />
    {/* eslint-disable-next-line react/no-danger */}
    <script dangerouslySetInnerHTML={{ __html: GA_CODE }} />
  </div>
);

export default ThirdPartyAnalytics;
