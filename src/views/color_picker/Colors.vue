<template>
  <v-container>
    <v-row>
      <v-col cols="10">
        <!-- List -->
        <div>
          <p>功能選單</p>
          <v-card class="mb-8" width="600" tile>
            <!-- dark 用於切換未被激活的字體顏色，color 用於切換背景顏色 -->
            <v-list flat :dark="blocks[1].whiteText" :color="blocks[1].color">
              <v-subheader>REPORTS</v-subheader>
              <!-- class 用於切換被激活的字體顏色 -->
              <v-list-item-group v-model="item" class="warning--text">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </div>

        <!-- Card -->
        <p>內容框（標題列）</p>
        <v-card class="mb-8" max-width="600">
          <!-- class 設置字體顏色，background 設置背景色 -->
          <!-- :class="{ 'white--text': blocks[2].whiteText }" -->
          <!-- :class="blocks[2].textColor" -->
          <v-card-title
            :class="blocks[2].textColor"
            :style="`background: ${blocks[2].color}`"
          >
            I am the title
            {{ typeof blocks[2].whiteText }}
          </v-card-title>
          <v-card-text>
            <div>Word of the Day</div>
            <p class="display-1 text--primary">be•nev•o•lent</p>
            <p>adjective</p>
            <div class="text--primary">
              well meaning and kindly.
              <br />"a benevolent smile"
            </div>
          </v-card-text>
          <!-- <v-card-actions>
        <v-btn text color="deep-purple accent-4">Learn More</v-btn>
      </v-card-actions> -->
        </v-card>

        <!-- Dialog -->
        <p>對話框（標題列）</p>
        <v-btn color="primary" @click.stop="dialog = true" class="mb-8 d-block">Open Dialog</v-btn>

        <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <!-- class 設置字體顏色，background 設置背景色 -->
            <!-- :class="{ 'white--text': blocks[3].whiteText }" -->
            <v-card-title
              :class="blocks[3].textColor"
              :style="`background: ${blocks[3].color}`"
              >Use Google's location service?</v-card-title
            >

            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde optio molestias nihil
              placeat mollitia maxime eligendi, architecto recusandae aspernatur, voluptatum totam
              repudiandae suscipit, nemo delectus facilis a dolores. Et, amet. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Unde optio molestias nihil placeat mollitia maxime
              eligendi, architecto recusandae aspernatur, voluptatum totam repudiandae suscipit,
              nemo delectus facilis a dolores. Et, amet. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Unde optio molestias nihil placeat mollitia maxime eligendi,
              architecto recusandae aspernatur, voluptatum totam repudiandae suscipit, nemo delectus
              facilis a dolores. Et, amet.
            </v-card-text>
          </v-card>
        </v-dialog>

        <!-- Button -->
        <p>按鈕</p>
        <div class="mb-8">
          <!-- class 設置字體顏色，color 設置背景色 -->
          <!-- :dark="blocks[4].whiteText" -->
          <!-- :class="{ 'white--text': blocks[4].whiteText }" -->
          <v-btn
            large
            :color="blocks[4].color"
            width="180px"
            class="mr-8"
            :class="blocks[4].textColor"
          >
            Button
          </v-btn>
        </div>
      </v-col>

      <v-col cols="2">
        <!-- Color Picker -->
        <div>
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
          ></v-color-picker>
          <!-- <v-select v-model="mode" :items="modes" style="max-width: 300px"></v-select> -->
          <v-btn
            v-if="select_block !== ''"
            color="primary"
            class="mt-4"
            width="100%"
            @click="UPDATE_COLOR({ select_color, select_block })"
            >確認</v-btn
          >
          <!-- eslint-disable-next-line max-len -->
          <v-btn
            v-if="select_block !== ''"
            color="warning"
            class="mt-4"
            width="100%"
            @click="RESET_COLOR()"
            >重置</v-btn
          >

          <!-- eslint-disable-next-line max-len -->
          <v-btn
            v-if="select_block !== ''"
            color="danger"
            class="mt-4 white--text"
            width="100%"
            @click="openDarkMode"
            >深色主題</v-btn
          >

          <v-btn
            v-if="select_block !== ''"
            color="success"
            class="mt-4 white--text"
            width="100%"
            @click="SWITCH_TEXT_COLOR(select_block)"
            >切換黑白字體顏色</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { State, namespace, Mutation } from 'vuex-class';

@Component
export default class Colors extends Vue {
  // Dialog
  dialog = false;

  // Color Picker
  mode = 'hsla';

  // modes = ['hsla', 'rgba', 'hexa'];

  select_color = '';

  select_block = '';

  @(namespace('colors').State) blocks!: object[];

  @(namespace('colors').Mutation) UPDATE_COLOR!: Function;

  @(namespace('colors').Mutation) RESET_COLOR!: Function;

  @(namespace('colors').Mutation) SWITCH_TEXT_COLOR!: Function;

  // List
  item = 1;

  items = [
    { text: 'Real-Time', icon: 'mdi-clock' },
    { text: 'Audience', icon: 'mdi-account' },
    { text: 'Conversions', icon: 'mdi-flag' },
  ];

  openDarkMode() {
    this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
  }

  // get color() {
  //   return this.value;
  // }

  // set color(v) {
  //   this.value = v;
  // }
}
</script>
