import { IUserRequest } from "../@type/.data";

const UserRequest = require("../request");

jest.mock("../request");

const mockData = {
  get: [
    { email: "kim@gmail.com", age: 20, job: "STUDENT" },
    { email: "choi@naver.com", age: 25, job: "NONE" },
  ],
  post: {
    email: "park@gmail.com",
    age: 31,
    job: "DEVELOPER",
  },
  put: {
    email: "park@gmail.com",
    age: 31,
    job: "SOLDIER",
  },
  patch: "비밀번호가 수정되었습니다",
  delete: "사용자가 삭제되었습니다",
};

describe("User Request", () => {
  const mockGet = jest.fn(async () => Promise.resolve(mockData.get));
  const mockPost = jest.fn(async () => Promise.resolve(mockData.post));
  const mockPut = jest.fn(async () => Promise.resolve(mockData.put));
  const mockPatch = jest.fn(async () => Promise.resolve(mockData.patch));
  const mockDelete = jest.fn(async () => Promise.resolve(mockData.delete));

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
    expect(userInfos).toEqual(mockData.post);
  });

  /* PUT */
  it("Edit user information", async () => {
    const payload = {
      age: 31,
      job: "SOLDIER",
    };
    const userInfos = await userRequest.put(payload);
    expect(userInfos).toEqual(mockData.put);
  });

  /* PATCH */
  it("Edit password", async () => {
    const userInfos = await userRequest.patch("1234qwer~");
    expect(userInfos).toBe(mockData.patch);
  });

  /* DELETE */
  it("Delete user", async () => {
    const userInfos = await userRequest.delete("1234qwer~");
    expect(userInfos).toBe(mockData.delete);
  });
});
