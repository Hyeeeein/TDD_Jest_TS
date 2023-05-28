import SessionStorage from "../session";

describe("sessionStorage", () => {
  let sessionStorage: SessionStorage;

  beforeEach(() => {
    sessionStorage = new SessionStorage();

    Object.defineProperty(global, "sessionStorage", {
      value: sessionStorage,
      writable: true,
    });
  });

  it("init", () => {
    expect(sessionStorage.store).toEqual({});
  });

  it("getItem", () => {
    sessionStorage.setItem("name", "kimhyein");
    expect(sessionStorage.getItem("name")).toBe("kimhyein");
  });

  it("setItem", () => {
    sessionStorage.setItem("userData", {
      id: "kimhyein",
      password: "1234qwer",
    });
    expect(sessionStorage.store).toEqual({
      userData: { id: "kimhyein", password: "1234qwer" },
    });
  });

  it("removeItem", () => {
    sessionStorage.setItem("age", 26);
    expect(sessionStorage.getItem("age")).toBe(26);

    sessionStorage.removeItem("age");
    expect(sessionStorage.getItem("age")).toBeNull();
  });

  it("clear", () => {
    sessionStorage.setItem("name", "kimhyein");
    sessionStorage.setItem("age", 26);
    expect(sessionStorage.store).toEqual({ name: "kimhyein", age: 26 });

    sessionStorage.clear();
    expect(sessionStorage.store).toEqual({});
  });
});
