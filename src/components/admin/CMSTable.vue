<template>
  <v-data-table
    v-model="selected"
    @input="enterSelect()"
    :headers="headers"
    :items="$store.getters['admin/cmsLists'][type].items"
    :server-items-length="$store.getters['admin/cmsLists'][type].meta.total"
    :items-per-page.sync="params.per_page"
    show-select
    :single-select="false"
    :page.sync="params.page"
    @update:page="fetchListType()"
    @update:items-per-page="fetchListType()"
    :loading="!$store.getters['admin/cmsLists'][type].items"
    class="elevation-1"
  >

    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title style="text-transform: capitalize;">
          {{ cardTitle }}
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn
        v-if="selected.length > 0" 
              color="primary"
              dark
              v-on:click="removeSelected"
            >
              Remove selected
            </v-btn>
        <v-spacer></v-spacer>

        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="2"
                  >
                    <v-text-field
                      height="30px"
                      v-model="editedItem.id" 
                      disabled
                      label="ID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.en" 
                      label="En"
                      height="30px"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.de" 
                      label="De"
                      height="30px"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.fr" 
                      label="Fr"
                      height="30px"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                {{ $t("cancel") }}
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                {{ $t("save") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">{{ $t("deleteThisItem") }}</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">{{ $t("cancel") }}</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">{{ $t("ok") }}</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDeleteSelected" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">{{ $t("deleteThisItem") }}</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDeleteSelected">{{ $t("cancel") }}</v-btn>
              <v-btn color="blue darken-1" text @click="deleteSelectedItemConfirm">{{ $t("ok") }}</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        {{ $t("reset") }}
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>

import store from "@/store";

export default {

  name: "CMSTable",

  props: {
    type: {
      type: String,
      default: ""
    },
  },

  data() {
    return {
      params: {
        page: 1,
        per_page: 10,
        type: ""
      },
      dialog: false,
      dialogDelete: false,
      dialogDeleteSelected: false,
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: 'ID',
          align: 'start',
          sortable: false,
          value: 'id',
          width: "10%"
        },
        { text: 'En', value: 'en' },
        { text: "De", value: 'de' },
        { text: "Fr", value: 'fr' },
        { text: 'Actions', value: 'actions', width: "15%" ,sortable: false },
      ],
      editing: false,
      items: [],
      editedItem: {
        id: '',
        en: '',
        de: '',
        fr: '',
        type: ''
      },
      defaultItem: {
        id: '',
        en: '',
        de: '',
        fr: '',
        type: ''
      },
    }
  },

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
    cardTitle() {
      return this.type.split("_").join(" ");
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
    dialogDeleteSelected (val) {
      val || this.closeDeleteSelected()
    },
    list(val) {
      this.items = val || [];
    }
  },

  created () {
    this.initialize();
    this.$store.dispatch('admin/cmsFetchListType', this.params);
  },

  methods: {

    removeSelected: function () {
    this.dialogDeleteSelected = true;  
    },
    initialize () {
      this.items = this.$store.getters['admin/cmsLists'][this.type].items;
      this.params.type = this.type;
    },
enterSelect() {

/*
  console.log(this.selected);
  console.log(this.items.length);
    if (this.selected.length == this.items.length) {
      alert('selected all')
    }
    */
  },
    editItem (item) {
      this.editedItem = Object.assign({}, item);
      this.editing = true;
      this.dialog = true;
    },

    deleteItem (item) {
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm () {
      store.dispatch("admin/cmsDeleteListItem", {
        item: this.editedItem,
        params: this.params 
      });
      this.closeDelete();
    },
    deleteSelectedItemConfirm () {
      let selected = [];
      this.selected.map((e)=>{
        selected.push(e.id);
      })
      
      store.dispatch("admin/cmsDeleteSelectedListItem", {
        items: selected,
        params: this.params 
      });
      
      this.closeDeleteSelected();
    },
    

    close () {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editing = false;
      });
    },

    closeDelete () {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
      });
    },
    closeDeleteSelected () {
      this.dialogDeleteSelected = false;
    },

    save () {
      if (this.editing) {
        store.dispatch("admin/cmsUpdateListItem", {
          item: this.editedItem,
          params: this.params 
        });

      } else {
        store.dispatch("admin/cmsAddListItem", {
          item: { ...this.editedItem, type: this.type },
          params: this.params 
        });
      }
      this.close();
    },

    fetchListType() {
      this.$store.dispatch('admin/cmsFetchListType', this.params);
    }
  },

};
</script>
