import { Helmet } from "react-helmet";
import Layout from "../../layouts/DashboardLayout";
import { Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import { memo } from "react";
import UploadForm from './UploadForm';
import FileUploadProgress from './FileUploadProgress';
import FileUploadInfo from './FileUploadInfo';

const UploadWrapper = styled(Grid)`
  max-width: 800px;
  margin: auto;
  padding: 0px 8px;

  & .fileDropWrapper {
    margin: 50px 0px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 2.5px #edededed;
    background: #fff;
  }

  & .fileDrop {
    text-align: center;
    border: 3px dotted #ccc;
    padding: 20px 50px;
  }

  & h5 {
    color: #444;
    margin: 15px 0px;
  }

  & h6 {
    font-size: 13px;
    color: #999 !important;
    margin: 20px import { UploadPage } from './index';
0px;
  }

  & button {
    margin: 15px 0px;
    border-radius: 45px;
    font-size: 17px;
    padding: 10px 20px;
  }

  & [type=file]{
    display:none;
  }
`;

export function UploadPage() {
  const [videoId, setVideoId] = useState(null);

  return (
    <Layout uploadPage={true} showSidebar={false}>
      <Helmet>
        <title>آپارات | بارگذاری ویدیو</title>
        <meta name="description" content="بارگذاری ویدیو" />
      </Helmet>

      <UploadWrapper container>
        <Grid item xs={12}>
          {!videoId && <UploadForm setVideoId={setVideoId}/>}
        </Grid>
        {videoId && <Typography variant="body1">ویدئو با موفقیت بارگذاری شد</Typography>}
        {(1) && (
          <Grid item xs={12} className="videoUploadInfoWrapper">
            <FileUploadProgress />
            <FileUploadInfo />
          </Grid>
        )}
      </UploadWrapper>
    </Layout>
  );
}

export default memo(UploadPage);
