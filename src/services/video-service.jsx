import request from "../services/request";
import videoData from '../config/video';

class VideoService {

  async UploadVideo(file){
    let result = null, error = null;    
    let formData = new FormData();
    formData.append('video', file);

    try{
      const config = {
        timeout: 3600 * 1000,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      const response = await request.post(videoData.endpoints.uploadvideo, formData, config);
      result = response.data;
    }
    catch(ex){
        console.log(ex);
        error = true;
    }
    return { result, error }
  }
}

const create = () => new VideoService();

export default create;
