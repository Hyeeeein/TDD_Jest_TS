import { IUserRequest } from "../@type/.data";

const UserRequest = require("../request");

jest.mock("../request");

describe("User Request", () => {
  const mockGet = jest.fn(async () => [
    { email: "kim@gmail.com", age: 20, job: "STUDENT" },
    { email: "choi@naver.com", age: 25, job: "NONE" },
  ]);
  const mockPost = jest.fn(async () => ({
    email: "park@gmail.com",
    age: 31,
    job: "DEVELOPER",
  }));
  const mockPut = jest.fn(async () => ({
    email: "park@gmail.com",
    age: 31,
    job: "SOLDIER",
  }));
  const mockPatch = jest.fn(async () => "비밀번호가 수정되었습니다");
  const mockDelete = jest.fn(async () => "사용자가 삭제되었습니다");

  UserRequest.mockImplementation(() => {
    return {
      get: mockGet,
      post: mockPost,
      put: mockPut,
      patch: mockPatch,
      delete: mockDelete,
    };
  });

  let userRequest: IUserRequest;

  beforeEach(() => {
    userRequest = new UserRequest();
  });

  /* GET */
  it("Get users infomation", async () => {
    const userInfos = await userRequest.get();
    expect(userInfos).toEqual([
      { email: "kim@gmail.com", age: 20, job: "STUDENT" },
      { email: "choi@naver.com", age: 25, job: "NONE" },
    ]);
  });

  /* POST */
  it("Add user", async () => {
    const payload = {
      email: "park@gmail.com",
      password: "1234qwer!",
      age: 31,
      job: "DEVELOPER",
    };
    const userInfos = await userRequest.post(payload);
    expect(userInfos).toEqual({
      email: "park@gmail.com",
      age: 31,
      job: "DEVELOPER",
    });
  });

  it("Fail Add user", async () => {
    const payload = {
      email: "park@gmail.com",
      password: "1234qwer!",
      age: 31,
      fail: 31,
      job: "DEVELOPER",
    };
    const userInfos = await userRequest.post(payload);
    expect(userInfos).toEqual({
      email: "park@gmail.com",
      age: 31,
      job: "DEVELOPER",
    });
  });

  /* PUT */
  it("Edit user information", async () => {
    const payload = {
      age: 31,
      job: "SOLDIER",
    };
    const userInfos = await userRequest.put(payload);
    expect(userInfos).toEqual({
      email: "park@gmail.com",
      age: 31,
      job: "SOLDIER",
    });
  });

  /* PATCH */
  it("Edit password", async () => {
    const userInfos = await userRequest.patch("1234qwer~");
    expect(userInfos).toBe("비밀번호가 수정되었습니다");
  });

  /* DELETE */
  it("Delete user", async () => {
    const userInfos = await userRequest.delete("1234qwer~");
    expect(userInfos).toBe("사용자가 삭제되었습니다");
  });
});
