<template>
  <v-row no-gutters>
    <!-- 側邊功能選單 -->
    <v-list dark flat color="#009688" width="280" min-height="100vh" style="border-radius: unset;">
      <v-list-item-group v-model="list_item">
        <v-list-item v-for="(item, i) in list_items" :key="i" color="#FBD341">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <div style="width: calc(100% - 280px);">
      <!-- 上方工具欄 -->
      <v-app-bar color="#62CFBB" dark>
        <v-img class="mr-4" src="@/assets/logo.png" max-width="48px"></v-img>
        <v-toolbar-title>智遇動物醫院</v-toolbar-title>
        <v-spacer></v-spacer>
        <span class="mr-4">胡譽懷醫師</span>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <span class="ml-4">12:32 PM</span>
      </v-app-bar>

      <!-- 區塊一 -->
      <div class="pa-8 d-flex justify-lg-space-between">
        <div class="d-flex flex-column">
          <!-- 對話框 -->
          <v-dialog v-model="dialog_main" width="600">
            <template v-slot:activator="{ on }">
              <v-btn class="mb-4" color="#62CFBB" dark v-on="on">對話框</v-btn>
            </template>
            <v-card>
              <v-card-title style="background-color: #62CFBB;">
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
              </v-card-actions>
            </v-card>
          </v-dialog>

          <!-- 刪除框 -->
          <v-dialog v-model="dialog_delete" width="350">
            <template v-slot:activator="{ on }">
              <v-btn color="#62CFBB" dark v-on="on">刪除框</v-btn>
            </template>
            <v-card>
              <v-card-title style="background-color: #62CFBB;">
                <span style="color: white;">確定刪除 ...</span>
              </v-card-title>
              <div class="pa-8 d-flex">
                <div class="box">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi dolor
                  voluptatibus nobis repellat commodi, officia sed inventore iusto iste blanditiis,
                  itaque porro, nihil vitae. Accusamus quasi nobis enim eum?
                </div>
              </div>
              <v-card-actions>
                <!-- <v-spacer></v-spacer> -->
                <v-btn width="47.5%" color="#acacac" dark @click="dialog = false">取消</v-btn>
                <!-- eslint-disable-next-line max-len -->
                <v-btn class="ml-auto" width="47.5%" color="#f76D6D" dark @click="dialog = false"
                  >刪除</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>

        <!-- 內容框 -->
        <v-card width="600">
          <v-card-title style="background-color: #62CFBB;">
            <span style="color: white;">內容框</span>
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
            <v-btn color="#acacac" dark>取消</v-btn>
            <v-btn color="#62CFBB" dark>確定</v-btn>
          </v-card-actions>
        </v-card>

        <!-- 選項卡 -->
        <v-card width="1000">
          <v-tabs class="mb-4" v-model="tab" background-color="#62CFBB" dark fixed-tabs>
            <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tabs color="#009688" fixed-tabs>
              <v-tab>看診列表</v-tab>
              <v-tab>詳細記錄</v-tab>
            </v-tabs>
          </v-tabs-items>
          <div class="pa-8">
            <div class="box">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque nisi dolor
              voluptatibus nobis repellat commodi, officia sed inventore iusto iste blanditiis,
              itaque porro, nihil vitae. Accusamus quasi nobis enim eum?
            </div>
          </div>
        </v-card>
      </div>

      <div class="pa-8 d-flex">
        <Table />

        <div class="ml-8">
          <div class="upload">
            <v-card class="img-content mb-4" elevation="6" width="300" height="300">
              <v-img :src="image" width="100%" height="100%"></v-img>
            </v-card>

            <v-avatar size="60" color="#62CFBB">
              <label style="cursor: pointer;">
                <v-icon color="white">fas fa-cloud-upload-alt</v-icon>
                <input type="file" class="d-none" @change="uploadImage" />
              </label>
            </v-avatar>
          </div>

          <!-- <v-avatar size="60" color="#62CFBB">
            <v-file-input
              dark
              :rules="rules"
              accept="image/png, image/jpeg, image/bmp"
              prepend-icon="fas fa-cloud-upload-alt"
              @change="uploadImage"
            ></v-file-input>
          </v-avatar> -->

          <!-- <v-input :success-messages="'王貝貝'" success disabled>飼主姓名</v-input> -->
        </div>
      </div>
    </div>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Table from '@/components/Table.vue';

@Component({
  components: {
    Table,
  },
})
export default class Components extends Vue {
  // List
  list_item = 1;

  list_items = [
    { text: 'Real-Time', icon: 'mdi-clock' },
    { text: 'Audience', icon: 'mdi-account' },
    { text: 'Conversions', icon: 'mdi-flag' },
  ];

  // Tab
  tab = null;

  items = [
    { tab: '寵物資訊', content: 'Tab 1 Content' },
    { tab: '生理數值/疫苗', content: 'Tab 2 Content' },
    { tab: '看診紀錄', content: 'Tab 3 Content' },
    { tab: '檢驗紀錄', content: 'Tab 4 Content' },
  ];

  // Dialog
  dialog_main = false;

  dialog_delete = false;

  // Upload Image
  image: any = '';

  uploadImage(target: any) {
    console.log(this);
    const { files }: any = (window as any).event.target;
    // const ft = files[0].type;
    // const fd = new FormData();
    const fr = new FileReader();
    fr.readAsDataURL(files[0]);
    fr.onload = () => {
      this.image = fr.result;
      // console.log(fr.result);
    };
  }

  rules = [
    (value: any) =>
      // eslint-disable-next-line implicit-arrow-linebreak
      !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
  ];
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  border: 2px dashed #ccc;
}

.upload {
  position: relative;

  .img-content {
    border-radius: 16px;
  }

  .v-avatar {
    position: absolute;
    bottom: -24px;
    right: -24px;
  }
}

// .v-input__control {
//   display: none;
// }

// .v-input__prepend-outer {
//   position: absolute;
//   top: 25%;
//   left: 30%;
// }
</style>
