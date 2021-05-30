import React, { FormEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { router } from "next/client";
import { red } from "@material-ui/core/colors";
import { API_URL } from "../utils/constants";
import getChannelData from "../utils/getChannelData";
import { useUser } from "../context/UserContext";
import { Container, Title, TitleUnderLineRed } from "./redeem/[dropId]";
import _TextField from "../components/_TextField";
import { typo } from "../lib/theme/styled-helpers";
import { ButtonThird } from "../components/Button";
import VSpacer from "../components/VSpacer";
import LoadingBox from "../lib/assets/LoadingBox";
import ImageWrapper from "../components/ImageWrapper";
import { CentredDeadline } from "./all";
import { formatDate } from "../utils/date";
import { encode } from "../utils/text";
import TwitterLogo from "../lib/assets/TwitterLogo";
import HSpacer from "../components/HSpacer";
import { createTweetContentInfluencer } from "../utils/twitter";
import { TwitterButton } from "./view/[dropId]";

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const DropContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
  cursor: pointer;
`;

const NewDropPage: React.FC = () => {
  const user = useUser();
  const [channel, setChannel] = useState("");
  const [channelThumb, setChannelThumb] = useState("");
  const [channelName, setChannelName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [image, setImage] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(false); // May want to show loading modal if time allows
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [hash, setHash] = useState(null);
  const [result, setResult] = useState(null);

  const uploadFilePinata = async () => {
    if (!imageFile) {
      console.log("No file");
      return;
    }
    setLoading(true);

    const data = new FormData();
    data.append("file", imageFile);
    const metadata = JSON.stringify({
      name: imageFile.name,
    });
    data.append("pinataMetadata", metadata);
    const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
    console.log(
      "process.env.NEXT_PUBLIC_PINATA_KEY",
      process.env.NEXT_PUBLIC_PINATA_KEY
    );
    const res = await fetch(url, {
      method: "POST",
      headers: {
        pinata_api_key: process.env.NEXT_PUBLIC_PINATA_KEY,
        pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET,
      },
      body: data,
    });
    console.log("res", res);
    const response = await res.json();
    console.log("response", response);
    setImage(response.IpfsHash);
    return response.IpfsHash;
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const hash = await uploadFilePinata();
    setHash(hash);
    console.log("image", image);
    console.log("channel", channel);
    try {
      const axiosResponse = await axios({
        method: "post",
        url: `${API_URL}/drops`,
        data: {
          channelId: channel,
          channelThumb,
          channelName,
          imageURI: hash,
          endDate: new Date(endDate),
        },
      });
      console.log("axiosResponse", axiosResponse);
      setResult(axiosResponse.data[0]);
      setSuccess(true);

      setLoading(false);
    } catch (e) {
      setError(e.message);
      console.log("e.message", e.message);
    }
  };
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: "image/*",
    onDrop: (files) => {
      setImageFile(files[0]);
    },
  });
  type FileProps = File & { path: string };
  const files = acceptedFiles.map((file: FileProps) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    const getUserChannelData = async () => {
      if (user?.oauth?.accessToken) {
        const data = await getChannelData(user.oauth.accessToken);
        setChannelThumb(data.snippet.thumbnails.default.url);
        setChannelName(data.snippet.title);
        setChannel(data.id);
      }
    };
    getUserChannelData();
  }, [user]);

  if (!user) {
    return (
      <Container>
        <h2>Login to YouTube to create your drop</h2>
      </Container>
    );
  }

  const restart = () => {
    setError("");
    setSuccess(false);
    setResult(null);
    acceptedFiles.splice(0, 1);
  };

  return (
    <Container>
      {success ? (
        <>
          <Title>Your Drop is Ready!</Title>
          <TitleUnderLineRed>{channelName}</TitleUnderLineRed>
          <CentredDeadline>YouTube NFT #{result.id}</CentredDeadline>
          <CentredDeadline>
            Subscription Deadline: {formatDate(new Date(endDate))}
          </CentredDeadline>

          <ImageWrapper src={hash} />
          <TwitterButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              const newWindow = window.open(
                `https://twitter.com/intent/tweet?text=${encode(
                  createTweetContentInfluencer(result.channelName, result.id)
                )}`,
                "_blank",
                "noopener,noreferrer"
              );
              if (newWindow) newWindow.opener = null;
            }}
            color="#fc2e34"
            type="submit"
          >
            <TwitterLogo />
            <HSpacer />
            Share on Twitter
          </TwitterButton>
          <VSpacer />
          <SubmitButton onClick={restart}>Drop Another</SubmitButton>
        </>
      ) : (
        <>
          <h2>Create Drop</h2>
          {loading && <p>Loading</p>}
          <FormContainer onSubmit={handleSubmit}>
            {/* <ChannelAvatar src={channelThumb} alt="Your thumb" /> */}
            <FormLabel>Channel Name</FormLabel>
            <_TextField disabled value={channelName} />
            <FormLabel>Channel ID</FormLabel>
            <_TextField
              disabled
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            />
            <FormLabel>Subscription Deadline</FormLabel>
            <_TextField
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              type="date"
            />
            <FormLabel>Upload image</FormLabel>
            <VSpacer />
            <div className="container">
              <DropContainer
                {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
              >
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
              </DropContainer>
            </div>
            <VSpacer />
            {files}
            <VSpacer />
            {loading ? (
              <LoadingBox height="200px" />
            ) : (
              <SubmitButton type="submit">Submit</SubmitButton>
            )}
          </FormContainer>
        </>
      )}
    </Container>
  );
};

export default NewDropPage;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 968px;
`;
const FormLabel = styled.div`
  ${typo.smallLabel};
`;
const SubmitButton = styled(ButtonThird)``;
const ButtonWrapper = styled.div`
  margin: 20px 0;
  padding: 0;
  display: flex;
  width: 100%;
`;

export const ChannelAvatar = styled.img`
  width: 70px;
  border-radius: 40px;
`;
