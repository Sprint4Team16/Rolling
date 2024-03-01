const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM = '/4-16';

// data fetch
export async function fetchData(endpoint) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
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
      throw new Error('Network response was not ok');
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
