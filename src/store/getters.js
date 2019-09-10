/*
* State 접근 메소드 정의
*/
export default {
  getCredential(state) {
    return state.credential;
  },
  getCustomModels(state) {
    return state.customModels;
  },
  getState(state) {
    return state.state;
  },
  getRecognizeResult(state) {
    return state.recognizeResult;
  },
  getCustomIdBySelectedModel(state) {
    return modelName => state.customModels.find(n => n.name === modelName);
  },
};
