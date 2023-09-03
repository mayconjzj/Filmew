const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;

const buildApiUrl = (
  endpoint: string,
  queryParams: Record<string, string | number> = {}
) => {
  const url = new URL(`${API_URL}${endpoint}`);
  const defaultParams: any = {
    api_key: API_KEY,
    ...queryParams
  };

  for (const key in defaultParams) {
    url.searchParams.append(key, defaultParams[key].toString());
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
      throw new Error('Falha na requisição à API do TMDb');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
