import React, { FormEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";
import { API_URL } from "../utils/constants";
import getChannelData from "../utils/getChannelData";
import { useUser } from "../context/UserContext";
import { Container } from "./redeem/[dropId]";
import _TextField from "../components/_TextField";
import { typo } from "../lib/theme/styled-helpers";
import { ButtonThird } from "../components/Button";
import VSpacer from "../components/VSpacer";

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
  const [buckets, setBuckets] = useState(null);
  const [bucketKey, setBucketKey] = useState(null);
  const [image, setImage] = useState("");
  const [subs, setSubs] = useState("");
  const [loading, setLoading] = useState(false); // May want to show loading modal if time allows

  // const setupBuckets = async () => {
  //   const { buckets: newBuckets, bucketKey: newBucketKey } = await getBuckets();
  //   setBuckets(newBuckets);
  //   setBucketKey(newBucketKey);
  // };

  const uploadFilePinata = async () => {
    // e.preventDefault();

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

    setLoading(false);
    return response.IpfsHash;
  };
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Upload Files
    // const { buckets, bucketKey } = await getBuckets();
    // await console.log("buckets", buckets);
    // await console.log("bucketKey", bucketKey);
    // if (!buckets || !bucketKey) throw Error("buckets or bucketKey not defined");
    // await initIndex(buckets, bucketKey, channel);
    // await insert
    const hash = await uploadFilePinata();
    console.log("image", image);
    console.log("channel", channel);

    const axiosResponse = await axios({
      method: "post",
      url: `${API_URL}/drops`,
      data: {
        channelId: channel,
        channelThumb,
        channelName,
        imageURI: hash,
        endDate: new Date(),
      },
    });
    console.log("axiosResponse", axiosResponse);
    // TODO: Send to server
    setLoading(false);
  };

  // const onDrop = async (acceptedFiles: File[]) => {
  //   // if (photos.length > 50) {
  //   //   throw new Error("Gallery at maximum size");
  //   // }
  //   if (acceptedFiles.length > 5) {
  //     throw new Error("Max 5 images at a time");
  //   }
  //   for (const accepted of acceptedFiles) {
  //     await handleNewFile(buckets, bucketKey, accepted);
  //   }
  //   // storeIndex(this.state.index);
  // };
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
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);

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

  // useEffect(() => {
  //   (async () => {
  //     await setupBuckets();
  //   })();
  // }, []);

  if (!user) {
    return (
      <Container>
        <h2>Login to YouTube to create your drop</h2>
      </Container>
    );
  }
  // if (!buckets) {
  //   return (
  //     <Container>
  //       <h2>Loading... buckets... </h2>
  //     </Container>
  //   );
  // }

  return (
    <Container>
      <h2>Create Drop</h2>
      {loading && <p>Loading</p>}
      <FormContainer onSubmit={handleSubmit}>
        {/* <img src={channelThumb} alt="Your thumb" /> */}
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
          value={subs}
          onChange={(e) => setSubs(e.target.value)}
          type="date"
        />
        <FormLabel>Upload image</FormLabel>
        <VSpacer />
        <div className="container">
          <DropContainer
            onDrop={onDrop}
            {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
          >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </DropContainer>
        </div>
        {files}
        <VSpacer />
        {/* <input */}
        {/*  type="file" */}
        {/*  onChange={(e) => setImageFile(e.target.files && e.target.files[0])} */}
        {/* />{" "} */}
        {/* <ButtonWrapper> */}
        <VSpacer />
        <SubmitButton type="submit">Submit</SubmitButton>
        {/* </ButtonWrapper> */}
      </FormContainer>
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
