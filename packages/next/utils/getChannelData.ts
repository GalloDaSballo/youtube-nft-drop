import axios from "axios";
import { ChannelItem } from "../types";

const getChannelData = async (accessToken: string): Promise<ChannelItem> => {
  try {
    const res = await axios({
      method: "GET",
      url: `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res?.data?.items?.[0];
  } catch (err) {
    return null;
  }
};

export default getChannelData;
