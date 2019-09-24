const BASE_URL = '/api';
const CUSTOMS = '/customizations';
const RECOGNIZE = '/recognize';
const EXPORT = '/export';

export default {
  GET_CUSTOMS: BASE_URL + CUSTOMS,
  CREATE_CUSTOM: BASE_URL + CUSTOMS,
  DELETE_CUSTOM: BASE_URL + CUSTOMS,
  RECOGNIZE: BASE_URL + RECOGNIZE,
  EXPORT: BASE_URL + EXPORT,
};
