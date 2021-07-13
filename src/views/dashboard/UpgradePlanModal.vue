<template>
  <v-dialog class="dialog"
            v-model="active"
            @click:outside="close('abort')"
            persistent
            width="750px"
            max-width="750px">
    <v-card flat class="rounded-lg wrap upgrade-dialog">
        <div class="modal-title">
            Choose upgrade plan
        </div>

        <div class="options">
            <v-btn  @click="form.active_plan = '35'"
                     v-bind:color="form.active_plan == '35' ? 'primary' : ''"
                     height="104"
                     class="upgrade-option">
               
                
                <v-img class="upgrade-icon"
                :src="require('@/assets/icons/top-rated.svg')"></v-img>

                <div>
                    <span class="upgrade-title">
                        Your account is higlighted in company search
                    </span>
                    <p class="upgrade-text">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                    <span class="updgrade-price">35€</span>
                </div>
            </v-btn>

            <v-btn  @click="form.active_plan = '10'" 
                     v-bind:color="form.active_plan == '10' ? 'primary' : ''"
                    height="104" 
                    class="upgrade-option">
                
                
                <v-img class="upgrade-icon"
                :src="require('@/assets/icons/medal.svg')"></v-img>

                <div>
                    <span class="upgrade-title">
                        Your account is higlighted in company search
                    </span>
                    <p class="upgrade-text">
                        Contrary to popular belief, Lorem Ipsum is not simply random text.
                    </p>
                    <span class="updgrade-price">10€</span>
                </div>
            </v-btn>
        </div>

        

      <div class="buttons">
          <v-btn
              @click="close"
              height="56"
              class="mt-16 font-weight-medium upgrade-btn"
              style="margin-right: 20px;"
          >
              {{ $t('general.cancel') }}
          </v-btn>
          <v-btn
              @click="save"
              color="primary"
              height="56"
              width = "178"
              class="mt-16 font-weight-medium upgrade-btn"
          >
              Next
          </v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import store from '@/store';

export default {
  name: 'UpgradePlanModal',

  props: {
    active: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'ok'
    },
    edit: {
      type: [Object, Boolean]
    }
  },
  data() {
    return {
      form: {
        active_plan: '',
      }
    };
  },
  created() {
    if (this.edit) {
      this.populate();
    }
  },
  methods: {
    close(type) {
      this.$emit('close', type);
    },
    save() {
      if (this.edit) {
        store.dispatch('user/updateUser', {
          id: this.edit.id,
          payload: this.form,
        });
      } else {
        console.log()
      }
      this.$emit('close', 1);
    },
    populate() {
      this.form.active_plan = this.edit.active_plan;
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog {
   font-family: $inter !important;
}

.modal-title {
    padding: 40px;
    font-size: 20px;
    font-weight: 600;
    line-height: 34px;
}
.options {
    margin: 0 40px;

    .upgrade-option {
        background: white;
        border: 1px solid #E9E9E9;
        margin-bottom: 24px;
        outline: none;
        flex: 0 0 100%;
        box-shadow: none;
        text-align: left;
    }

    .upgrade-text {
        font-size: 11px;
        line-height: 12px;
        word-break: break-all;
        padding-top: 9px;
    }
}

.buttons {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    padding: 40px;
}
</style>
