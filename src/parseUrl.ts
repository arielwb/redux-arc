export interface MetaParameters {
  [key: string]: number | string
}

export default function parseUrl(url: string, params: MetaParameters) {
  const replaceUrlParameters = (match: string, $1: string, param: string): string => {
    const paramType = typeof params[param]

    if (paramType !== 'string' && paramType !== 'number') {
      throw new Error(`Param ${param} from url ${url}, not found in params object`);
    }
    return `${params[param]}`
  }

  return url.replace(/(:)([A-Za-z][A-Za-z0-9]*)/g, replaceUrlParameters)
}
