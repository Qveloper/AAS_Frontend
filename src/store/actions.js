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
    backendAPI.createCustom(payload)
      .then((response) => {
        if (response.data.customization_id.length !== 0) {
          store.dispatch(Constant.FETCH_CUSTOM_MODELS, { username: payload.username, password: payload.password });
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
        // 단어의 timestamp 정보만 따로 정제
        let tmpTimestamps = [];
        response.data.results.forEach((element) => {
          tmpTimestamps = tmpTimestamps.concat(element.alternatives[0].timestamps);
        });
        // end 타임과 start 타임이 다른 구간을 기준으로 자름
        const timestamps = [[]];
        tmpTimestamps.forEach((element, index, array) => {
          timestamps[timestamps.length - 1].push(element);
          if (index !== array.length - 1 && element[2] !== array[index + 1][1]) {
            timestamps[timestamps.length] = [];
          }
        });
        store.commit(Constant.SET_RECOGNIZE_RESULT, timestamps);

        // 화면 표시 및 서버 전송용 Data 정제
        const subtitles = [];
        timestamps.forEach(() => {
          const obj = {};
          obj.initData = true;
          subtitles.push(obj);
        });
        store.commit(Constant.SET_SUBTITLES, subtitles);
        store.commit(Constant.SET_STATE_VIDEOFILE, true);
        store.commit(Constant.SET_IS_LOADING, false);
      });
  },
  [Constant.EXPORT_XML]: (store, payload) => {
    store.commit(Constant.SET_IS_LOADING, true);
    const params = payload;
    params.fileName = store.state.fileName;

    backendAPI.exportXml(params)
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
