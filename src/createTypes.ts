import { parseToUppercase } from './utils';

export default function createTypes(actionKeys: string[], NAMESPACE: string) {
  return actionKeys.reduce((acc: ActionTypes, actionName: string) => ({
    ...acc,
    [actionName]: `${NAMESPACE}_${parseToUppercase(actionName)}`,
  }), {});
};

export interface ActionTypes {
  [key: string]: string
}