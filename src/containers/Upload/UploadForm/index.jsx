import { FileDrop } from "react-file-drop";
import UploadLogo from "../../../assets/images/upload-light.svg";
import { isset } from "../../../utilities/helper.js";
import { Typography, Button } from "@mui/material";
import video_service from "../../../services/video-service";

const videoService = video_service();

const UploadForm = ({ setVideoId }) => {
    let fileSelectorRef = null;
    const onSelectFileFromFileSelector = (e) => {
      handleDrop(e.target.files);
    };
  
    const handleDrop = async (files) => {
      if (files) {
        if (!files || !files[0]) {
          return alert("لطفاً یک فایل ویدیو انتخاب کنید");
        }
  
        const file = files[0];
        if (!file.type || !file.type.includes("video/")) {
          return alert("فقط فایل های ویدیو با پسوند mp4 را انتخاب کنید");
        }
  
        if (file.size > 100000000) {
          return alert("حجم فایل زیاد است");
        }
  
        const response = await videoService.UploadVideo(file);
        if (!response.error && isset(response.result.video)) {
          setVideoId(response.result.video);
        } 
        else {
          //error
          console.log(response.error);
        }
      }
  
      return false;
    };
    
    const wantToSelectFile = () => {
      fileSelectorRef.click();
    };
    
    return (
      <FileDrop onDrop={handleDrop} className="fileDropWrapper">
        <div className="fileDrop">
          <img src={UploadLogo} alt="aparat|upload" />
          <Typography variant="h5">بارگذاری ویدیو</Typography>
          <Typography variant="h6">
            فایل های خود را اینجا بکشید و یا فایل خود را با کلیک انتخاب کنید
          </Typography>
          <Button onClick={wantToSelectFile} variant="contained">
            انتخاب ویدیو
          </Button>
          <input
            type="file"
            ref={(el) => {
              fileSelectorRef = el;
            }}
            onChange={onSelectFileFromFileSelector}
          />
        </div>
      </FileDrop>
    );
  };
  
  export default UploadForm;
