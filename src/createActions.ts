import { parseToUppercase } from './utils';
import createTypes from './createTypes';
import createCreators from './createCreators';
import validateConfig from './validateConfig';
import toExternalTypes from './toExternalTypes';

export enum HTTPMethod {
  connect = 'connect',
  delete = 'delete',
  get = 'get',
  head = 'head',
  options = 'options',
  patch = 'patch',
  post = 'post',
  put = 'put',
  trace = 'trace'
}

export enum ApplyPoint {
  onResponse = 'onResponse',
  onRequest = 'onRequest'
}

export interface AsyncActionConfig {
  url: string,
  method: HTTPMethod,
  middlewares: Function[]
}

type ActionConfigValue = null | string | number | AsyncActionConfig

export interface ActionsConfiguration {
  [key: string]: ActionConfigValue
}

/*
  @param {string} namespace - namespace to be uppercased and prefix your action types
  @param {Array} config - object with options
*/

export default function createActions(namespace: string, config: ActionsConfiguration) {
  const NAMESPACE = parseToUppercase(namespace);
  validateConfig(NAMESPACE, config);

  const actionKeys = Object.keys(config);
  const actionTypes = createTypes(actionKeys, NAMESPACE);
  const creators = createCreators(config, actionTypes);

  return {
    creators,
    types: toExternalTypes(config, actionTypes),
  };
}
