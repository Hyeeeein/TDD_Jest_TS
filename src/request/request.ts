import { IPostPayload, IPutPayload, ResUserInfo } from "./@type/.data";

class UserRequest {
  URL: string;
  status: number;
  constructor() {
    this.URL = "http://example.com/userInfo";
    this.status = 400;
  }

  async get(): Promise<ResUserInfo[]> {
    const response = await fetch(this.URL, { method: "GET" });
    return await response.json();
  }
  async post(payload: IPostPayload): Promise<ResUserInfo> {
    /* 사용자 추가 */
    const response = await fetch(this.URL, {
      method: "POST",
      body: JSON.stringify(payload),
    });
    return await response.json();
  }
  async put(payload: IPutPayload): Promise<ResUserInfo> {
    /* 회원 정보 수정 */
    const response = await fetch(this.URL, {
      method: "PUT",
      body: JSON.stringify(payload),
    });
    return await response.json();
  }
  async patch(password: string) {
    /* 회원 비밀번호 수정 */
    const response = await fetch(this.URL, {
      method: "PATCH",
      body: JSON.stringify(password),
    });
    return await response.json();
  }
  async delete(password: string) {
    /* 회원 삭제 */
    const response = await fetch(this.URL, {
      method: "DELETE",
      body: JSON.stringify(password),
    });
    return await response.json();
  }
}

module.exports = UserRequest;
