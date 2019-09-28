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
  createCustom(header, params) {
    return axios.post(CONF.CREATE_CUSTOM, header, {
      data: {
        username: params.username,
        password: params.password,
        name: params.name,
        base_model_name: params.base_model_name,
        description: params.description,
      },
    });
  },
  deleteCustom(params) {
    return axios.delete(CONF.DELETE_CUSTOM, {
      data: {
        username: params.username,
        password: params.password,
        customization_id: params.customization_id,
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
    });
  },
};
