export interface Drop {
  id: string;
  channelId: string;
  channelThumb: string;
  channelName: string;
  imageURI: string;
  endDate: Date;
  channelName: string;
  channelThumb: string;
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
