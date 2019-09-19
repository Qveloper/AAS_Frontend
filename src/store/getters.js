/*
* State 접근 메소드 정의
*/
export default {
  getIsLoading(state) {
    return state.isLoading;
  },
  getCredential(state) {
    return state.credential;
  },
  getCustomModels(state) {
    return state.customModels;
  },
  getState(state) {
    return state.state;
  },
  getFileName(state) {
    return state.fileName;
  },
  getRecognizeResult(state) {
    return state.recognizeResult;
  },
  getSubtitles(state) {
    return state.subtitles;
  },
  getCustomIdBySelectedModel(state) {
    return modelName => state.customModels.find(n => n.name === modelName);
  },
};
