import { Magic } from "magic-sdk";
import { OAuthExtension } from "@magic-ext/oauth";

const magic = new Magic("pk_live_ED946A69BFDA55B0", {
  extensions: [new OAuthExtension()],
});

export default magic;
