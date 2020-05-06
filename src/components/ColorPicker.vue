<template>
  <v-dialog v-model="dialog" width="600">
    <template v-slot:activator="{ on }">
      <v-btn class="mb-4" color="danger" dark v-on="on">色彩切換</v-btn>
    </template>
    <v-card class="pa-8">
      <v-select
        :items="blocks"
        label="選擇切換顏色區域"
        solo
        v-model="select_block"
        item-text="zh"
        item-value="value"
      ></v-select>
      <!-- eslint-disable-next-line max-len -->
      <v-color-picker
        v-model="select_color"
        :mode.sync="mode"
        v-if="select_block !== ''"
        class="mx-auto"
      ></v-color-picker>
      <!-- <v-select v-model="mode" :items="modes" style="max-width: 300px"></v-select> -->
      <v-btn
        v-if="select_block !== ''"
        color="primary"
        class="mt-4"
        width="100%"
        @click="UPDATE_COLOR({ select_color, select_block })"
      >確認</v-btn>
      <!-- eslint-disable-next-line max-len -->
      <v-btn
        v-if="select_block !== ''"
        color="warning"
        class="mt-4"
        width="100%"
        @click="RESET_COLOR()"
      >重置</v-btn>

      <!-- eslint-disable-next-line max-len -->
      <v-btn color="danger" class="mt-4 white--text" width="100%" @click="openDarkMode">深色主題</v-btn>

      <v-btn
        v-if="select_block !== '' && select_block !== 'background'"
        color="success"
        class="mt-4 white--text"
        width="100%"
        @click="SWITCH_TEXT_COLOR(select_block)"
      >切換字體顏色（黑、白）</v-btn>

      <!-- <v-card-title style="background-color: #62CFBB;">
        <span style="color: white;">對話框</span>
      </v-card-title>
      <div class="pa-8 d-flex">
        <div class="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi dolor
          voluptatibus nobis repellat commodi, officia sed inventore iusto iste blanditiis,
          itaque porro, nihil vitae. Accusamus quasi nobis enim eum?
        </div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="#acacac" dark @click="dialog = false">取消</v-btn>
        <v-btn color="#62CFBB" dark @click="dialog = false">確定</v-btn>
      </v-card-actions>-->
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { State, namespace, Mutation } from 'vuex-class';

@Component
export default class ColorPicker extends Vue {
  dialog = false;

  mode = 'hsla';

  // modes = ['hsla', 'rgba', 'hexa'];

  select_color = '';

  select_block = '';

  @(namespace('colors').State) blocks!: object[];

  @(namespace('colors').Mutation) UPDATE_COLOR!: Function;

  @(namespace('colors').Mutation) RESET_COLOR!: Function;

  @(namespace('colors').Mutation) SWITCH_TEXT_COLOR!: Function;

  openDarkMode() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }
}
</script>
