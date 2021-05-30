export interface Drop {
  id: string;
  channelId: string;
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
