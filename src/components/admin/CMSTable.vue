<template>
  <v-data-table
    :headers="headers"
    :items="items"
    sort-by="calories"
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
                      v-model="editedItem.id"
                      solo
                      disabled
                      label="ID"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.en"
                      solo
                      label="En"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.de"
                      solo
                      label="De"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.fr"
                      solo
                      label="Fr"
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
    list: {
      type: [Array, Object],
    }
  },

  data() {
    return {
      dialog: false,
      dialogDelete: false,
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
      items: [],
      editedIndex: -1,
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
    list(val) {
      this.items = val || [];
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.items = this.list;
    },

    editItem (item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.items.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true;
    },

    deleteItemConfirm () {
      store.dispatch("admin/cmsDeleteListItem", this.editedItem);
      this.closeDelete();
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      })
    },

    save () {
      if (this.editedIndex > -1) {
        store.dispatch("admin/cmsUpdateListItem", this.editedItem);

      } else {
        store.dispatch("admin/cmsAddListItem",
          { ...this.editedItem, type: this.type }
        );
      }
      this.close();
    },
  },

};
</script>
