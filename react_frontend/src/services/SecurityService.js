import axios from 'axios'

const SECURITY_API_BASE_URL = "http://localhost:8080/api/v1/securities"

class SecurityService{

getSeucrities(){
   return axios.get(SECURITY_API_BASE_URL);
}

createSecurity(security){
   return axios.post(SECURITY_API_BASE_URL, security);
}

getSecurityById(securityId){
   return axios.get(SECURITY_API_BASE_URL + '/' + securityId);
}

updateSecurity(security, securityId){
   return axios.put(SECURITY_API_BASE_URL + '/' + securityId, security);
}

deleteSecurity(securityId){
   return axios.delete(SECURITY_API_BASE_URL + '/' + securityId);
}

}

export default new SecurityService();