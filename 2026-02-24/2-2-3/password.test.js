const { isValidPassword } = require("./password");

describe("isValidPassword", () => {
  describe("정상 케이스", () => {
    test("모든 조건 만족", () => {
      expect(isValidPassword("Password123")).toBe(true);
    });
  });

  describe("실패 케이스", () => {
    test("유효한 비밀번호", () => {
      expect(isValidPassword("Password123")).toBe(true);
    });

    test("8자 미만 실패", () => {
      expect(isValidPassword("Pass1")).toBe(false);
    });

    test("영문 없음", () => {
      expect(isValidPassword("12345678")).toBe(false);
    });

    test("빈 문자열", () => {
      expect(isValidPassword("")).toBe(false);
    });
  });
});
