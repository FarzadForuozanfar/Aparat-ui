import request from "../services/request";
import authData from '../config/auth';

class AuthService {

  async Login(username, password, endpoint){
    const data = {
        username: username,
        password: password,
        grant_type:authData.grantType,
        client_id:authData.client_id,
        client_secret: authData.client_secret
    };
    
    try{
      const response = await request.post(endpoint, data);
      return response.data;
    }
    catch(error){
      console.log(error);
    }
  }
}

const create = () => new AuthService();

export default create;
