export interface Drop {
  id: string;
  channelId: string;
  channelThumb: string;
  channelName: string;
  imageURI: string;
  endDate: Date;
}

export interface ChannelItem {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      default: {
        url: string;
      };
    };
  };
}

export interface Claim {
  id: string;
  subscriber: string;
  drop: {
    id: string;
    channelId: string;
    tokenURI: string;
  };
  tokenId: string;
}

export interface DropFromGraph {
  id: string;
  channelId: string;
  tokenURI: string;
  claims: {
    id: string;
  }[];
}
