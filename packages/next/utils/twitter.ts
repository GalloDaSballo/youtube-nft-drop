import { getLink } from "./text";

export const createTweetContent = (
  channelName: string,
  imageURI: string
): string =>
  `New YouTube NFT Drop by ${channelName}, I claimed mine!
    
    ${getLink(imageURI)}`;

export const createTweetContentInfluencer = (
  channelName: string,
  dropId: string
): string =>
  `New YouTube NFT Drop out, come claim yours here!
    
    ${window.location.host}/redeem/${dropId}`;
