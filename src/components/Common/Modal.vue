<!-- template for the modal component -->
<template>
  <transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <!-- <div class="modal-container"> -->
            <div class="modal-container" :style="{ width: myWidth, 'max-height': myHeight + ' !important' }">

                <div class="modal-header">
                    <slot name="header">
                        <!-- Modal Header -->
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                      <!-- Modal Body -->
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                      <!-- <h1>default footer</h1> -->
                      <button class="modal-default-button" @click="select()">
                        OK
                      </button>
                      <button class="modal-default-button" @click="close()">
                        Cancl
                      </button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Modal',
  computed: {
    ...mapGetters(['getIsLoading']),
  },
  props: ['myWidth', 'myHeight'],
  methods: {
    select() {
      this.$emit('select');
    },
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
  border-radius: 5px;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  font-size: 20px;
  font-weight: bold;
}

.modal-body {
  margin: 12px 0;
}

.modal-default-button {
  float: right;
  color: white;
  font-weight: bold;
  background: #4AAE9B;
  border: 1px solid #4AAE9B;
  /* background-color: #6255ff;
  border-color: #5648ff; */
  background-color:rgb(92, 142, 235);
  border-color: cornflowerblue;
  border-radius: 5px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.modal-footer h1 {
    font-size: 20px;
    color:#fff;
}

</style>
