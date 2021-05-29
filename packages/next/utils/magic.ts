import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const makeMagic = () => {
  const magic = new Magic("pk_live_ED946A69BFDA55B0", {
    extensions: [new OAuthExtension()],
  });

  return magic;
};

export default makeMagic;
