export interface Drop {
  id: string;
  channelId: string;
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
