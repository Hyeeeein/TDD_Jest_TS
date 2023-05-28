import LocalStorage from "../local";

describe("LocalStorage", () => {
  let localStorage: LocalStorage;

  beforeEach(() => {
    localStorage = new LocalStorage();

    Object.defineProperty(global, "localStorage", {
      value: localStorage,
      writable: true,
    });
  });

  it("init", () => {
    expect(localStorage.store).toEqual({});
  });

  it("getItem", () => {
    localStorage.setItem("name", "kimhyein");
    expect(localStorage.getItem("name")).toBe("kimhyein");
  });

  it("setItem", () => {
    localStorage.setItem("userData", { id: "kimhyein", password: "1234qwer" });
    expect(localStorage.store).toEqual({
      userData: { id: "kimhyein", password: "1234qwer" },
    });
  });

  it("removeItem", () => {
    localStorage.setItem("age", 26);
    expect(localStorage.getItem("age")).toBe(26);

    localStorage.removeItem("age");
    expect(localStorage.getItem("age")).toBeNull();
  });

  it("clear", () => {
    localStorage.setItem("name", "kimhyein");
    localStorage.setItem("age", 26);
    expect(localStorage.store).toEqual({ name: "kimhyein", age: 26 });

    localStorage.clear();
    expect(localStorage.store).toEqual({});
  });
});
