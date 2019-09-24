/*
* 비동기 Action Method 정의
*/
import backendAPI from '../api/backendAPI';
import Constant from '../constant';

export default {
  // 공통 영역
  [Constant.FETCH_CUSTOM_MODELS]: (store, payload) => {
    store.commit(Constant.SET_IS_LOADING, true);
    backendAPI.getCustoms(payload)
      .then((response) => {
        // Custom 모델 없을 시 생성 메소드 호출
        if (response.data.customizations.length === 0) {
          this.createCustomModel(payload);
          store.commit(Constant.SET_IS_LOADING, false);
          return;
        }
        store.commit(Constant.SET_STATE_LOGIN, true);
        store.commit(Constant.SET_IS_LOADING, false);
        store.commit(Constant.FETCH_CUSTOM_MODELS, response.data.customizations);
        store.commit(Constant.FETCH_CREDENTIAL, { username: payload.username, password: payload.password });
      });
  },
  [Constant.CREATE_CUSTOM_MODEL]: (store, payload) => {
    store.commit(Constant.SET_IS_LOADING, true);
    backendAPI.createCustom(payload, payload.params)
      .then((response) => {
        if (response.data.customization_id.length !== 0) {
          store.dispatch(Constant.FETCH_CUSTOM_MODELS, { username: payload.params.username, password: payload.params.password });
        }
      });
  },
  [Constant.DELETE_CUSTOM_MODEL]: (store, payload) => {
    store.commit(Constant.SET_IS_LOADING, true);
    backendAPI.deleteCustom(payload)
      .then((response) => {
        if (response.data.length !== 0) {
          store.dispatch(Constant.FETCH_CUSTOM_MODELS, { username: payload.username, password: payload.password });
        }
      });
    store.commit(Constant.SET_IS_LOADING, false);
  },
  [Constant.RECOGNIZE_VIDEO]: (store, payload) => {
    store.commit(Constant.SET_IS_LOADING, true);
    backendAPI.recognizeVideo(payload.formdata, payload.params)
      .then((response) => {
        store.commit(Constant.SET_RECOGNIZE_RESULT, response.data);
        const subtitles = [];
        response.data.results.forEach((element) => {
          const obj = {};
          obj.text = element.alternatives[0].transcript;
          obj.start = element.alternatives[0].timestamps[0][1];
          obj.end = element.alternatives[0].timestamps[element.alternatives[0].timestamps.length - 1][2];
          subtitles.push(obj);
        });
        store.commit(Constant.SET_SUBTITLES, subtitles);
        store.commit(Constant.SET_STATE_VIDEOFILE, true);
        store.commit(Constant.SET_IS_LOADING, false);
      });
  },
  [Constant.EXPORT_XML]: (store, payload) => {
    store.commit(Constant.SET_IS_LOADING, true);
    backendAPI.exportXml(payload)
      .then((response) => {
        const fileURL = window.URL.createObjectURL(new Blob([response.data]));
        const fileLink = document.createElement('a');

        fileLink.href = fileURL;
        fileLink.setAttribute('download', store.state.fileName);
        document.body.appendChild(fileLink);

        fileLink.click();
      });
    store.commit(Constant.SET_IS_LOADING, false);
  },
};
