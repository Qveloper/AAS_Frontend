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
  state: {
    login: false,
    videofile: false,
  },
  recognizeResult: {},
  isLoading: false,
};
