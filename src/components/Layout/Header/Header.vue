
<template>
    <!-- begin:: Header -->
    <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed " data-ktheader-minimize="on" style="background-image: url(static/images/header-bg-demo3.jpg);">
      <div class="kt-header__top">
        <div class="kt-container  kt-container--fluid ">
          <Brand/>
          <Topbar/>
        </div>
      </div>
      <div class="kt-header__bottom">
        <Menu/>
      </div>
    </div>

    <!-- end:: Header -->
</template>

<script>
import Brand from './_brand';
import Menu from './_menu';
import Topbar from './_topbar';

export default {
  components: {
    Brand,
    Menu,
    Topbar,
  },
};
</script>
