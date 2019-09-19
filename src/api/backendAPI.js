import axios from 'axios';
import CONF from '../config';

export default {
  getCustoms(params) {
    return axios.get(CONF.GET_CUSTOMS, {
      params: {
        username: params.username,
        password: params.password,
      },
    });
  },
  recognizeVideo(formData, params) {
    return axios.post(CONF.RECOGNIZE, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        username: params.username,
        password: params.password,
        customization_id: params.customization_id,
      },
    });
  },
  exportXml(params) {
    return axios.post(CONF.EXPORT, params, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        subtitles: params,
      },
    });
  },
};
