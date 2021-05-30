import { getRemoteNetworkConfig } from "./networks";
import { NETWORK } from "./env";

export * from "./networks";
export * from "./env";
export * from "./constants";

export const NETWORK_CONFIG = getRemoteNetworkConfig(NETWORK);
