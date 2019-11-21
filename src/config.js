const BASE_URL = '/api';
const CUSTOMS = '/customizations';
const CUSTOM = '/customization';
const RECOGNIZE = '/recognize';
const EXPORT = '/export';
const XML = '/xml';
const TEXT = '/text';
const CORPUS = '/corpus';
const TRAIN = '/train';

export default {
  GET_CUSTOMS: BASE_URL + CUSTOMS,
  CREATE_CUSTOM: BASE_URL + CUSTOMS,
  DELETE_CUSTOM: BASE_URL + CUSTOMS,
  FETCH_CUSTOM: BASE_URL + CUSTOM,
  RECOGNIZE: BASE_URL + RECOGNIZE,
  EXPORT_XML: BASE_URL + EXPORT + XML,
  EXPORT_TEXT: BASE_URL + EXPORT + TEXT,
  ADD_CORPUS: BASE_URL + CORPUS,
  FETCH_CORPUS: BASE_URL + CORPUS,
  TRAIN: BASE_URL + TRAIN,
};
