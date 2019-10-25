const BASE_URL = '/api';
const CUSTOMS = '/customizations';
const RECOGNIZE = '/recognize';
const EXPORT = '/export';
const CORPUS = '/corpus';
const TRAIN = '/train';

export default {
  GET_CUSTOMS: BASE_URL + CUSTOMS,
  CREATE_CUSTOM: BASE_URL + CUSTOMS,
  DELETE_CUSTOM: BASE_URL + CUSTOMS,
  RECOGNIZE: BASE_URL + RECOGNIZE,
  EXPORT: BASE_URL + EXPORT,
  ADD_CORPUS: BASE_URL + CORPUS,
  FETCH_CORPUS: BASE_URL + CORPUS,
  TRAIN: BASE_URL + TRAIN,
};
