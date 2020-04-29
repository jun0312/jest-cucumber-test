      #language: zh-TW
      功能: 登入醫院管理系統
      判斷登入的角色身分並前往正確的預設頁面

      場景大綱: 不同的用戶登入醫院管理系統
      假設 用戶點擊登入按鈕
      當 驗證 <userName>
      當 驗證 <password>
      那麼 將用戶導向至 <url>

      例子:
      | userName | password    | url                   |
      | admin    | 12345678    | 001.lovevet.app/admin |
      | staff    | 66666666666 | 001.lovevet.app/admin |