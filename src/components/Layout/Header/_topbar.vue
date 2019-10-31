<template>
<!-- begin:: Topbar -->
<div class="kt-header__topbar">

  <!--begin: Search -->
  <div class="kt-header__topbar-item kt-header__topbar-item--search">
    <div class="kt-header__topbar-wrapper">

      <!--[html-partial:include:{"file":"partials/_topbar/dropdown/search-inline.html"}]/-->
    </div>
  </div>

  <!--end: Search -->

  <!--begin: Quick Actions -->
  <div class="kt-header__topbar-item dropdown">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <span class="kt-header__topbar-icon"><i class="flaticon-layers"></i></span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">

      <!--[html-partial:include:{"file":"partials/_topbar/dropdown/quick-actions-solid.html"}]/-->
    </div>
  </div>

  <!--end: Quick Actions -->

  <!--begin: Quick Panel Toggler -->
  <div class="kt-header__topbar-item" data-toggle="kt-tooltip" title="Quick panel" data-placement="top">
    <div class="kt-header__topbar-wrapper">
      <span class="kt-header__topbar-icon" id="kt_quick_panel_toggler_btn"><i class="flaticon-grid-menu"></i></span>
    </div>
  </div>

  <!--end: Quick Panel Toggler -->

  <!--begin: Notifications -->
  <div class="kt-header__topbar-item dropdown">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <span class="kt-header__topbar-icon"><i class="flaticon-alarm"></i></span>
      <span class="kt-badge kt-badge--danger">3</span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-xl">

      <!--[html-partial:include:{"file":"partials/_topbar/dropdown/notifications-light.html"}]/-->
    </div>
  </div>

  <!--end: Notifications -->

  <!--begin: Languages -->
  <div class="kt-header__topbar-item kt-header__topbar-item--langs">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <span class="kt-header__topbar-icon">
        <img class="" src="../../../assets/media/flags/020-flag.svg" alt="" />
      </span>
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim">

      <!--[html-partial:include:{"file":"partials/_topbar/dropdown/languages.html"}]/-->
    </div>
  </div>

  <!--end: Languages -->

  <!--begin: User -->
  <div class="kt-header__topbar-item kt-header__topbar-item--user">
    <div class="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="20px,10px">
      <img alt="Pic" src="../../../assets/media/users/300_21.jpg" />
    </div>
    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-md">

      <!--[html-partial:include:{"file":"partials/_topbar/dropdown/user-light.html"}]/-->
    </div>
  </div>
  <!--end: User -->
</div>

<!-- end:: Topbar -->
</template>

<script>
export default {
};
</script>
