import { fetchImages, fetchRecipients } from './DataApi';

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

export async function getRecipientData(findId) {
  try {
    const response = await getRecipients();
    const recipients = response.results;
    return recipients.find((rec) => rec.id === findId);
  } catch (error) {
    console.error(error);
    return null;
  }
}
