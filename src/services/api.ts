const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

type DefaultParamsProps = {
  api_key?: string;
  [key: string]: string | number | undefined;
};

const buildApiUrl = (
  endpoint: string,
  queryParams: Record<string, string | number> = {}
) => {
  const url = new URL(`${API_URL}${endpoint}`);
  const defaultParams: DefaultParamsProps = {
    api_key: API_KEY,
    ...queryParams
  };

  for (const key in defaultParams) {
    if (Object.prototype.hasOwnProperty.call(defaultParams, key)) {
      const value = defaultParams[key];
      if (value !== undefined) {
        url.searchParams.append(key, value.toString());
      }
    }
  }

  return url.toString();
};

export const getData = async (
  endpoint: string,
  queryParams: Record<string, string | number> = {}
) => {
  try {
    const apiUrl = buildApiUrl(endpoint, queryParams);
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Falha na requisição à API do TMDB');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
