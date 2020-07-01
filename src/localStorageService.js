const LocalStorageService = (function(){
 var _service;
 function _getService() {
     if(!_service) {
       _service = this;
       return _service
   }
   return _service
 }
 function _setToken(tokenObj) {
   localStorage.setItem(‘access_token’, tokenObj.access_token);
   localStorage.setItem(‘refresh_token’, tokenObj.refresh_token);
 }
 function _getAccessToken() {
   return localStorage.getItem(‘access_token’);
 }
 function _getRefreshToken() {
   return localStorage.getItem(‘refresh_token’);
 }
 function _clearToken() {
   localStorage.removeItem(‘access_token’);
   localStorage.removeItem(‘refresh_token’);
 }
  function _getUserInfo() {
    return localStorage.getItem(‘user_info’);
 }
  function _setUserInfo(userInfoObj) {
     localStorage.setItem(‘user_info’,userInfoObj);
 }
return {
   getService : _getService,
   setToken : _setToken,
   getAccessToken : _getAccessToken,
   getRefreshToken : _getRefreshToken,
   clearToken : _clearToken,
   setUserInfo:_setUserInfo,
   getUserInfo:_getUserInfo
 }
})();
export default LocalStorageService;