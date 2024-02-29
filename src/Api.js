const BASE_URL = 'https://rolling-api.vercel.app';
const TEAM = '/4-16';

// data fetch
async function fetchData(endpoint) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  const result = await response.json();
  return result;
}

// data POST
async function postData(endpoint, data) {
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

// 배경 이미지 데이터 불러오기
export function getBackground() {
  return fetchData('/background-images/');
}

// 프로필 이미지 데이터 불러오기
export function getProfile() {
  return fetchData('/profile-images/');
}

// 롤링페이퍼를 생성 후 POST
export function submitRollingPost(data) {
  return postData('/recipients/', data);
}

// 대상에게 보내는 매세지 생성 후 POST
export function submitMessagePost(recipientId, data) {
  return postData(`/${recipientId}/messages/`, data);
}
