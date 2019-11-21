/*
* State에 변이를 주는 Method 정의
*/
import Constant from '../constant';

// 상태를 변경하는 기능만을 뽑아서...
export default {
  [Constant.SET_IS_LOADING]: (state, payload) => {
    state.isLoading = payload;
  },
  [Constant.FETCH_CREDENTIAL]: (state, payload) => {
    state.credential.username = payload.username;
    state.credential.password = payload.password;
  },
  [Constant.SET_PROGRESS_STATUS]: (state, payload) => {
    state.progressbar = payload;
  },
  [Constant.FETCH_CUSTOM_MODELS]: (state, payload) => {
    state.customModels = payload;
  },
  [Constant.SET_VIDEO_PLAYER_OBJECT]: (state, payload) => {
    state.videoPlayer.videoPlayerObject = payload;
  },
  [Constant.SET_VIDEO_PLAYER_CURRENT_TIME]: (state, payload) => {
    state.videoPlayer.currentTime = payload;
  },
  [Constant.SET_VIDEO_PLAYER_LOOP]: (state, payload) => {
    state.videoPlayer.loop = payload;
  },
  [Constant.FETCH_CUSTOM_MODEL]: (state, payload) => {
    state.selectedModel = payload;
  },
  [Constant.SET_CORPUS_NAME]: (state, payload) => {
    state.selectedCorpus = payload;
  },
  [Constant.SET_STATE_LOGIN]: (state, payload) => {
    state.state.login = payload;
  },
  [Constant.SET_STATE_VIDEOFILE]: (state, payload) => {
    state.state.videofile = payload;
  },
  [Constant.SET_FILENAME]: (state, payload) => {
    state.fileName = payload;
  },
  [Constant.SET_RECOGNIZE_RESULT]: (state, payload) => {
    state.recognizeResult = payload;
  },
  [Constant.SPLICE_RECOGNIZE_RESULT]: (state, index) => {
    state.recognizeResult.splice(index, 1);
  },
  [Constant.SET_SUBTITLES]: (state, payload) => {
    state.subtitles = payload;
  },
  [Constant.SET_SUBTITLE]: (state, payload) => {
    state.subtitles[payload.index].text = payload.text;
    state.subtitles[payload.index].initData = payload.initData;
  },
  [Constant.SPLICE_SUBTITLE]: (state, index) => {
    state.subtitles.splice(index, 1);
  },
  [Constant.SET_SELECTED_MODEL_NAME]: (state, payload) => {
    state.state.selectedModelName = payload;
  },
  [Constant.SET_MODAL_MESSAGE]: (state, payload) => {
    state.modal.message = payload;
  },
  [Constant.SET_MODAL_IS_SHOWING]: (state, payload) => {
    state.modal.isShowing = payload;
  },
};
