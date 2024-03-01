import { fetchData } from './DataApi';

// 배경 이미지 데이터 불러오기
export function getBackground() {
  return fetchData('/background-images/');
}

// 프로필 이미지 데이터 불러오기
export function getProfile() {
  return fetchData('/profile-images/');
}
