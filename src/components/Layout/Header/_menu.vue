
<template>
  <div class="kt-container  kt-container--fluid ">
    <!-- begin: Header Menu -->
    <button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i class="la la-close"></i></button>
    <div class="kt-header-menu-wrapper" id="kt_header_menu_wrapper" style="opacity: 1;">
      <div id="kt_header_menu" class="kt-header-menu kt-header-menu-mobile ">
        <ul class="kt-menu__nav ">
          <li class="kt-menu__item  kt-menu__item--open kt-menu__item--here kt-menu__item--submenu kt-menu__item--rel kt-menu__item--open kt-menu__item--here" data-ktmenu-submenu-toggle="click" aria-haspopup="true"><a href="javascript:;" class="kt-menu__link kt-menu__toggle"><span class="kt-menu__link-text">Dashboard</span><i class="kt-menu__hor-arrow la la-angle-down"></i><i class="kt-menu__ver-arrow la la-angle-right"></i></a>
            <div class="kt-menu__submenu kt-menu__submenu--classic kt-menu__submenu--left">
              <ul class="kt-menu__subnav">
                <li class="kt-menu__item  kt-menu__item--active " aria-haspopup="true"><a href="index.html" class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span class="kt-menu__link-text">Default Dashboard</span></a></li>
                <li class="kt-menu__item " aria-haspopup="true"><a href="dashboards/aside.html" class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span class="kt-menu__link-text">Aside Dashboard</span></a></li>
                <li class="kt-menu__item " aria-haspopup="true"><a href="dashboards/fluid.html" class="kt-menu__link "><i class="kt-menu__link-bullet kt-menu__link-bullet--line"><span></span></i><span class="kt-menu__link-text">Fluid Dashboard</span></a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <div class="kt-header-toolbar">
        <a href="#" class="btn btn-wide btn-bold btn-danger btn-upper">Purchase</a>
      </div>
    </div>
    <!-- end: Header Menu -->
  </div>
</template>

<script>
export default {
};
</script>
