import { API_HUBAPI_TOKEN } from '@environments/index';

const headers = {
  'Content-Type': 'application/json',
  Authorization: API_HUBAPI_TOKEN,
};

export const post = async (url: string, body: any) => {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(body),
    });

    const json = await res.json();
    if (json.errors) {
      throw new Error('Failed to get');
    }

    return json;
  } catch (error) {
    return { error };
  }
};
