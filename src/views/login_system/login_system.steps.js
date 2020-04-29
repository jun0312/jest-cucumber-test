// eslint-disable-next-line import/no-extraneous-dependencies
import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('src/views/login_system/login_system.feature');

defineFeature(feature, (test) => {
  test('不同的用戶登入醫院管理系統', ({ given, when, then }) => {
    function verUserName(userName) {
      if (userName === 'admin' || userName === 'staff' || userName === 'doctor') return true;
      return false;
    }

    function verPassword(password) {
      if (password.length >= 8 && password.length <= 20) return true;
      return false;
    }

    given('用戶點擊登入按鈕', () => {
      // Click button ...
    });

    when(/^驗證 (.*)$/, (userName) => {
      expect(verUserName(userName)).toBe(true);
    });

    when(/^驗證 (.*)$/, (password) => {
      expect(verPassword(password)).toBe(true);
    });

    then(/^將用戶導向至 (.*)$/, (url) => {
      // router.push(url);
      // 頁面跳轉後會依據不同角色該擁有的功能權限做判斷是否正確跳轉
    });
  });
});
