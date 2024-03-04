import { postData } from './DataMethodApi';

// 롤링페이퍼를 생성 후 POST
export function submitRollingPost(data) {
  return postData('/recipients/', data);
}

// 대상에게 보내는 매세지 생성 후 POST
export function submitMessagePost(id, data) {
  return postData(`/recipients/${id}/messages/`, data);
}
