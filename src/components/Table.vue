<template>
  <v-card width="830">
    <v-card-title :class="blocks[2].textColor" :style="`background: ${blocks[2].color}`">
      表格框
    </v-card-title>

    <div>
      <v-data-table :headers="headers" :items="desserts" sort-by="calories">
        <template v-slot:top>
          <v-toolbar flat :dark="false">
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="pink" dark class="mb-2" v-on="on">新增欄位</v-btn>
              </template>
              <v-card>
                <v-card-title :class="blocks[3].textColor"
                  :style="`background: ${blocks[3].color}`">
                  {{ formTitle }}
                </v-card-title>

                <v-card-text>
                  <!-- <v-container> -->
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <!-- eslint-disable-next-line max-len -->
                      <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                    </v-col>
                  </v-row>
                  <!-- </v-container> -->
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="#acacac" dark @click="close">取消</v-btn>
                  <v-btn color="#62CFBB" dark @click="save">確定</v-btn>
                  <!-- <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
                  <v-btn color="blue darken-1" text @click="save">Save</v-btn>-->
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>

        <template v-slot:item.actions="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
          <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
        </template>

        <template v-slot:no-data>
          <v-btn color="primary" @click="initialize">Reset</v-btn>
        </template>
      </v-data-table>
    </div>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="#acacac" dark>取消</v-btn>
      <v-btn color="#62CFBB" dark>確定</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { State, namespace, Mutation } from 'vuex-class';

@Component
export default class Table extends Vue {
  @(namespace('colors').State) blocks!: object[];

  dialog = false;

  headers = [
    {
      text: 'Dessert (100g serving)',
      align: 'start',
      sortable: false,
      value: 'name',
    },
    { text: 'Calories', value: 'calories' },
    { text: 'Fat (g)', value: 'fat' },
    { text: 'Carbs (g)', value: 'carbs' },
    { text: 'Protein (g)', value: 'protein' },
    { text: 'Actions', value: 'actions', sortable: false },
  ];

  desserts: object[] = [];

  editedIndex = -1;

  editedItem = {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  };

  defaultItem = {
    name: '',
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
  };

  get formTitle() {
    return this.editedIndex === -1 ? '新增欄位' : '編輯欄位';
  }

  @Watch('dialog')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dialogHandler(val: any) {
    // eslint-disable-next-line no-unused-expressions
    val || this.close();
  }

  created() {
    this.initialize();
  }

  initialize() {
    this.desserts = [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
      },
      {
        name: 'Cupcake',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
      },
      {
        name: 'Gingerbread',
        calories: 356,
        fat: 16.0,
        carbs: 49,
        protein: 3.9,
      },
      {
        name: 'Jelly bean',
        calories: 375,
        fat: 0.0,
        carbs: 94,
        protein: 0.0,
      },
      {
        name: 'Lollipop',
        calories: 392,
        fat: 0.2,
        carbs: 98,
        protein: 0,
      },
      {
        name: 'Honeycomb',
        calories: 408,
        fat: 3.2,
        carbs: 87,
        protein: 6.5,
      },
      {
        name: 'Donut',
        calories: 452,
        fat: 25.0,
        carbs: 51,
        protein: 4.9,
      },
      {
        name: 'KitKat',
        calories: 518,
        fat: 26.0,
        carbs: 65,
        protein: 7,
      },
    ];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  editItem(item: any) {
    this.editedIndex = this.desserts.indexOf(item);
    this.editedItem = { ...item };
    this.dialog = true;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  deleteItem(item: any) {
    const index = this.desserts.indexOf(item);
    // eslint-disable-next-line no-alert
    if (window.confirm('確定刪除該欄位？')) {
      this.desserts.splice(index, 1);
    }
  }

  close() {
    this.dialog = false;
    this.$nextTick(() => {
      this.editedItem = { ...this.defaultItem };
      this.editedIndex = -1;
    });
  }

  save() {
    if (this.editedIndex > -1) {
      Object.assign(this.desserts[this.editedIndex], this.editedItem);
    } else {
      this.desserts.push(this.editedItem);
    }
    this.close();
  }
}
</script>
