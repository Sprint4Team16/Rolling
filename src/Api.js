const BASE_URL = 'https://rolling-api.vercel.app';

async function fetchData(endpoint) {
  const url = `${BASE_URL}${endpoint}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${endpoint} 요청 중 오류가 발생했습니다.`);
  }
  const result = await response.json();
  return result;
}

// 배경 이미지 데이터 불러오기
export function getBackground() {
  return fetchData('/background-images/');
}

// 프로필 이미지 데이터 불러오기
export function getProfile() {
  return fetchData('/profile-images/');
}
