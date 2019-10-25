import axios from 'axios';
import CONF from '../config';

export default {
  getCustoms(params) {
    return axios.get(CONF.GET_CUSTOMS, {
      auth: {
        username: params.username,
        password: params.password,
      },
    });
  },
  createCustom(params) {
    return axios.post(CONF.CREATE_CUSTOM, {
      name: params.name,
      base_model_name: params.base_model_name,
      description: params.description,
    },
    {
      auth: {
        username: params.username,
        password: params.password,
      },
    });
  },
  deleteCustom(params) {
    return axios.delete(CONF.DELETE_CUSTOM, {
      auth: {
        username: params.username,
        password: params.password,
      },
      data: {
        customization_id: params.customization_id,
      },
    });
  },
  recognizeVideo(formData, params) {
    return axios.post(CONF.RECOGNIZE, formData, {
      auth: {
        username: params.username,
        password: params.password,
      },
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      params: {
        customization_id: params.customization_id,
      },
    });
  },
  exportXml(params) {
    return axios.post(CONF.EXPORT, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        subtitles: params.subtitles,
        customization_id: params.customization_id,
        fileName: params.fileName,
      },
    },
    {
      auth: {
        username: params.username,
        password: params.password,
      },
    });
  },
  addCorpus(params) {
    return axios.post(CONF.ADD_CORPUS, {
      data: {
        subtitles: params.subtitles,
        corpus_name: params.corpus_name,
        customization_id: params.customization_id,
        fileName: params.fileName,
      },
    },
    {
      auth: {
        username: params.username,
        password: params.password,
      },
    });
  },
  fetchCorpus(params) {
    // path 나 query로 바꾸거 GET
    // console.log('kyubeom', params);
    return axios.get(CONF.FETCH_CORPUS, {
      params: {
        customization_id: params.customization_id,
        corpus_name: params.corpus_name,
      },
      auth: {
        username: params.username,
        password: params.password,
      },
    });
  },
  trainCustomModel(params) {
    return axios.post(CONF.TRAIN, {
      data: {
        customization_id: params.customization_id,
      },
    },
    {
      auth: {
        username: params.username,
        password: params.password,
      },
    });
  },
};
