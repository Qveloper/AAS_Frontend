/*
* 비동기 Action Method 정의
*/
import backendAPI from '../api/backendAPI';
import Constant from '../constant';

export default {
  // 공통 영역
  [Constant.FETCH_CUSTOM_MODELS]: (store, payload) => {
    backendAPI.getCustoms(payload)
      .then((response) => {
        // Custom 모델 없을 시 생성 메소드 호출
        if (response.data.customizations.length === 0) {
          this.createCustomModel(payload);
          return;
        }
        store.commit(Constant.SET_STATE_LOGIN, true);
        store.commit(Constant.FETCH_CUSTOM_MODELS, response.data.customizations);
        store.commit(Constant.FETCH_CREDENTIAL, { username: payload.username, password: payload.password });
      });
  },
  [Constant.RECOGNIZE_VIDEO]: (store, payload) => {
    backendAPI.recognizeVideo(payload.formdata, payload.params)
      .then((response) => {
        store.commit(Constant.SET_RECOGNIZE_RESULT, response.data);
      });
  },
};
