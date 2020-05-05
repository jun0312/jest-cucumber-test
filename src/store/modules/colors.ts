import vuetify from '@/plugins/vuetify';

export default {
  namespaced: true,
  state: {
    blocks: [
      {
        zh: '系統底色',
        value: 'background',
        color: 'white',
      },
      {
        zh: '功能選單',
        value: 'list',
        color: 'success',
        whiteText: true,
      },
      {
        zh: '內容框（標題列）',
        value: 'card',
        color: '#62CFBB',
        textColor: 'white--text',
      },
      {
        zh: '對話框（標題列）',
        value: 'dialog',
        color: '#62CFBB',
        textColor: 'white--text',
      },
      {
        zh: '按鈕',
        value: 'button',
        color: 'primary',
        textColor: 'white--text',
      },
    ],
  },
  mutations: {
    UPDATE_COLOR(state: any, payload: any) {
      const res = state.blocks.find((item: any) => item.value === payload.select_block);
      res.color = payload.select_color;
    },
    RESET_COLOR(state: any) {
      vuetify.framework.theme.dark = false;
      state.blocks.forEach((item: any, index: any) => {
        const i = item;
        if (!index) {
          i.color = 'white';
        } else if (item.value === 'list') {
          i.color = 'success';
        } else {
          i.color = 'primary';
        }
      });
    },
    SWITCH_TEXT_COLOR(state: any, payload: any) {
      const res = state.blocks.find((item: any) => item.value === payload);
      if (res.value === 'list') {
        res.whiteText = !res.whiteText;
      }
      if (res.textColor === 'white--text') {
        res.textColor = 'black--text';
      } else {
        res.textColor = 'white--text';
      }
    },
  },
};
