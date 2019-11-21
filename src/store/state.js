/*
* State 정의
* 공통적으로 사용되는 데이터 관리
*/
export default {
  credential: {
    username: '',
    password: '',
  },
  customModels: [],
  selectedModel: {},
  selectedCorpus: {},
  state: {
    login: false,
    videofile: false,
    selectedModelName: '',
  },
  fileName: '',
  recognizeResult: {},
  subtitles: [],
  isLoading: false,
  videoPlayer: {
    videoPlayerObject: {},
    loop: false,
    currentTime: {
      start: 0,
      end: 0,
    },
  },
  progressbar: false,
  modal: {
    message: '',
    isShowing: false,
  },
};
