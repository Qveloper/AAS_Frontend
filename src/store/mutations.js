/*
* State에 변이를 주는 Method 정의
*/
import Constant from '../constant';

// 상태를 변경하는 기능만을 뽑아서...
export default {
  [Constant.FETCH_CREDENTIAL]: (state, payload) => {
    state.credential.username = payload.username;
    state.credential.password = payload.password;
  },
  [Constant.FETCH_CUSTOM_MODELS]: (state, payload) => {
    state.customModels = payload;
  },
  [Constant.SET_STATE_LOGIN]: (state, payload) => {
    state.state.login = payload;
  },
  [Constant.SET_STATE_VIDEOFILE]: (state, payload) => {
    state.state.videofile = payload;
  },
  [Constant.SET_RECOGNIZE_RESULT]: (state, payload) => {
    state.recognizeResult = payload;
  },
};
