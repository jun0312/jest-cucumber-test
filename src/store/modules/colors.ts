export default {
  namespaced: true,
  state: {
    blocks: [
      { zh: '系統底色', value: 'background', color: '#FFFFFF' },
      { zh: '功能選單', value: 'list', color: '#62CFBB' },
      { zh: '內容框（標題列）', value: 'card', color: '#62CFBB' },
      { zh: '對話框（標題列）', value: 'dialog', color: '#62CFBB' },
      { zh: '按鈕', value: 'button', color: '#62CFBB' },
    ],
  },
  mutations: {
    UPDATE_COLOR(state: any, payload: any) {
      const res = state.blocks.find((item: any) => item.value === payload.select_block);
      res.color = payload.select_color;
    },
    RESET_COLOR(state: any) {
      state.blocks.forEach((item: any, index: any) => {
        const i = item;
        if (!index) {
          i.color = '#FFFFFF';
        } else {
          i.color = '#62CFBB';
        }
      });
    },
  },
};
