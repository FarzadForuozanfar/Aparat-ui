import { Helmet } from "react-helmet";
import Layout from "../../layouts/DashboardLayout";
import { Grid, Typography, Button } from "@mui/material";
import styled from "styled-components";
// import { UploadFile as UploadIcon } from "@mui/icons-material";
import { FileDrop } from "react-file-drop";
import UploadLogo from "../../assets/images/upload-light.svg";

const UploadWrapper = styled(Grid)`
  max-width: 800px;
  margin: auto;
  padding: 0px 8px;

  & .fileDropWrapper{
    margin:50px 0px;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 2.5px #edededed;
    background: #fff;
  }

  & .fileDrop{
    text-align: center;
    border: 3px dotted #ccc;
    padding: 20px 50px;
  }
  
  & h5{
    color: #444;
    margin:15px 0px;
  }

  & h6{
    font-size: 13px;
    color: #999 !important;
    margin:20px 0px;
  }

  & button{
    margin:15px 0px;
    border-radius: 45px;
    font-size: 17px;
    padding: 10px 20px;
  }
`;

export function UploadPage() {
  return (
    <Layout uploadPage={true} showSidebar={false}>
      <Helmet>
        <title>بارگذاری ویدیو</title>
        <meta name="description" content="بارگذاری ویدیو" />
      </Helmet>

      <UploadWrapper container>
        <Grid item xs={12}>
          <FileDrop
            onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
            onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
            onFrameDrop={(event) => console.log('onFrameDrop', event)}
            onDragOver={(event) => console.log('onDragOver', event)}
            onDragLeave={(event) => console.log('onDragLeave', event)}
            onDrop={(files, event) => console.log('onDrop!', files, event)}
            className="fileDropWrapper">
            <div className="fileDrop">
              <img src={UploadLogo} alt="aparat|upload" />
              <Typography variant="h5">بارگذاری ویدیو</Typography>
              <Typography variant="h6">فایل های خود را اینجا بکشید و یا فایل خود را با کلیک انتخاب کنید</Typography>
              <Button variant="contained">انتخاب ویدیو</Button>
            </div>
          </FileDrop>
        </Grid>
      </UploadWrapper>
    </Layout>
  );
}

export default UploadPage;
