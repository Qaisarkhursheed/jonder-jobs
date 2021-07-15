<template>
  <div class="team-management-table">
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="dummy"
      :single-select="true"
      item-key="name"
      show-select
      flat
      class="table"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn
          @click="removeUser(item)"
          color="#F12727"
          class="full-w font-weight-medium"
          style="color: #fff"
        >
          Remove
        </v-btn>
      </template>
    </v-data-table>
  </div>
</template>

<script>

export default {
  name: 'TeamManagementTable',

  data() {
    return {
      selected: null,
      headers: [
        {
          text: 'User',
          value: 'user',
          width: '25%'
        },
        {
          text: 'Email',
          value: 'email',
          width: '25%'
        },
        {
          text: 'Status',
          value: 'status',
          width: '15%'
        },
        {
          text: 'Invited on',
          value: 'invited_on',
          width: '15%'
        },
         { 
           text: '', 
           value: 'actions',
           width: '10%'
         }
      ],
      dummy:[
        {
          id: 1,
          user: "Max Mustermann",
          email: "marko@plutus.eu",
          status: "Active",
          invited_on: "Jun 14, 12:33 PM"
        },
        {
          id: 2,
          user: "Max Mustermann",
          email: "marko@plutus.eu",
          status: "Active",
          invited_on: "Jun 14, 12:33 PM"
        },
        {
          id: 3,
          user: "Max Mustermann",
          email: "marko@plutus.eu",
          status: "Active",
          invited_on: "Jun 14, 12:33 PM"
        }
      ]
    };
  },

  methods: {
    removeUser() {}
  }
};
</script>
<style lang="scss" scoped>
.team-management-table {
  .table {
    border: 1px solid #E6E7E9;
  }
}
</style>