const headers = {
  'Content-Type': 'application/json',
};

export const get = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers,
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to get');
  }

  return json;
};
