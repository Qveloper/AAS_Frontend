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
  getProgressBar(state) {
    return state.progressbar;
  },
  getCustomModels(state) {
    return state.customModels;
  },
  getVideoPlayer(state) {
    return state.videoPlayer;
  },
  getSelectedModel(state) {
    return state.selctedModel;
  },
  getSelctedCorpus(state) {
    return state.selectedCorpus;
  },
  getStatusBySelectedCorpus(state) {
    return state.selectedCorpus.state;
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
    return state.subtitles.map((obj, index) => {
      const newObj = obj;
      // 초기데이터일 경우, chunk들을 합쳐 text 값 생성
      if (newObj.initData) {
        const tmpElement = state.recognizeResult[index];
        newObj.text = '';
        tmpElement.forEach((element) => {
          newObj.text += element[0];
          newObj.text += ' ';
        });
        newObj.start = tmpElement[0][1];
        newObj.end = tmpElement[tmpElement.length - 1][2];
        return newObj;
      }
      // 아닐 경우 값을 그대로 return
      return obj;
    });
  },
  getCustomIdBySelectedModel(state) {
    return modelName => state.customModels.find(n => n.name === modelName);
  },
  getSelectedModelStatus(state) {
    return state.state.selectedModelStatus;
  },
};
