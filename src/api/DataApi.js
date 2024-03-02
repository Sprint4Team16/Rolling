const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM = '/4-16';

// background, profile image fetch
export async function fetchImages(endpoint) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  return result;
}

export async function fetchRecipients(endpoint) {
  const url = `${BASE_URL}${TEAM}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
      'X-CSRFToken':
        'fMj2sOIqI9AcFOHzN97CRfUfKEmwG2fzuuVyuBRGtONF3PqIUvMX0XnEOEgXEjSn',
    },
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const result = await response.json();
  return result;
}

// data POST
export async function postData(endpoint, data) {
  try {
    const response = await fetch(`${BASE_URL}${TEAM}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(
      'There has been a problem with your fetch operation: ',
      error,
    );
    return null;
  }
}
