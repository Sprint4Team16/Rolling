import { fetchImages } from './DataApi';

// 배경 이미지 데이터 불러오기
export function getBackground() {
  return fetchImages('/background-images/');
}

// 프로필 이미지 데이터 불러오기
export function getProfile() {
  return fetchImages('/profile-images/');
}
