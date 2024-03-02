import { fetchImages, fetchRecipients } from './DataMethodApi';

// 배경 이미지 데이터 불러오기
export function getBackground() {
  return fetchImages('/background-images/');
}

// 프로필 이미지 데이터 불러오기
export function getProfile() {
  return fetchImages('/profile-images/');
}

// card 데이터 가져오기
export function getRecipients() {
  return fetchRecipients('/recipients/');
}

// parameter로 입력한 id에 해당하는 recipient 데이터 가져오기
export function getRecipientData(id) {
  console.log(fetchRecipients(`/recipients/${id}/`));
  return fetchRecipients(`/recipients/${id}/`);
}

// 롤링페이퍼 대상에게 남긴 메세지 데이터 가져오기
export function getMessage() {
  return fetchRecipients(`/messages/${id}/`);
}