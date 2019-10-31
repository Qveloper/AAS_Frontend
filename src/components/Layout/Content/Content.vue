<template>
<!-- begin:: Content -->
<div class="kt-container  kt-grid__item kt-grid__item--fluid">
  <div class="kt-grid kt-grid--desktop kt-grid--ver-desktop  kt-inbox" id="kt_inbox">
    <!--Begin:: Inbox Aside-->
    <div class="kt-grid__item kt-portlet kt-inbox__aside" id="kt_inbox_aside" style="opacity: 1;">
        <button type="button" class="btn btn-brand  btn-upper btn-bold  kt-inbox__compose" data-toggle="modal" data-target="#kt_inbox_compose">
            <i class="flaticon2-send-1"></i> Preview
        </button>

        <div class="kt-inbox__nav">
            <ul class="kt-nav">
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="inbox">
                        <i class="kt-nav__link-icon flaticon2-mail"></i>
                        <span class="kt-nav__link-text">Inbox</span>
                            <span class="kt-nav__link-badge">
                            <span class="kt-badge kt-badge--unified-success kt-badge--md kt-badge--rounded kt-badge--boldest">3</span>
                        </span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="marked">
                        <i class="kt-nav__link-icon flaticon-star"></i>
                        <span class="kt-nav__link-text">Marked</span>
                    </a>
                </li>
                <li class="kt-nav__item kt-nav__item--active">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="draft">
                        <i class="kt-nav__link-icon flaticon2-writing"></i>
                        <span class="kt-nav__link-text">Draft</span>
                            <span class="kt-nav__link-badge">
                            <span class="kt-badge kt-badge--unified-warning kt-badge--md kt-badge--rounded kt-badge--boldest">1</span>
                        </span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="sent">
                        <i class="kt-nav__link-icon flaticon2-mail-1"></i>
                        <span class="kt-nav__link-text">Sent</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link" data-action="list" data-type="trash">
                        <i class="kt-nav__link-icon flaticon2-rubbish-bin"></i>
                        <span class="kt-nav__link-text">Trash</span>
                    </a>
                </li>

                <li class="kt-nav__item kt-margin-t-30">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa fa-genderless kt-font-warning"></i>
                        <span class="kt-nav__link-text">Custom Work</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa fa-genderless kt-font-success"></i>
                        <span class="kt-nav__link-text">Partnership</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa fa-genderless kt-font-info"></i>
                        <span class="kt-nav__link-text">In Progres</span>
                    </a>
                </li>
                <li class="kt-nav__item">
                    <a href="#" class="kt-nav__link">
                        <i class="kt-nav__link-icon fa flaticon2-plus"></i>
                        <span class="kt-nav__link-text">Add Label</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!--End::Aside-->

    <!--Begin:: Inbox List-->
    <div class="kt-grid__item kt-grid__item--fluid kt-portlet kt-inbox__list kt-inbox__list--shown" id="kt_inbox_list" style="display: flex;">
        <div class="kt-portlet__head">
            <div class="kt-inbox__toolbar kt-inbox__toolbar--extended">
                <div class="kt-inbox__actions kt-inbox__actions--expanded">
                    <div class="kt-inbox__check">
                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                            <input type="checkbox">
                            <span></span>
                        </label>

                        <div class="btn-group">
                            <button type="button" class="kt-inbox__icon kt-inbox__icon--light kt-inbox__icon--sm" data-toggle="dropdown">
                                <i class="flaticon2-down"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-left dropdown-menu-fit dropdown-menu-xs">
                                <ul class="kt-nav">
                                    <li class="kt-nav__item kt-nav__item--active">
                                        <a href="#" class="kt-nav__link">
                                            <span class="kt-nav__link-text">All</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <span class="kt-nav__link-text">Read</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <span class="kt-nav__link-text">Unread</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <span class="kt-nav__link-text">Starred</span>
                                        </a>
                                    </li>
                                    <li class="kt-nav__item">
                                        <a href="#" class="kt-nav__link">
                                            <span class="kt-nav__link-text">Unstarred</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <button type="button" class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Reload list">
                            <i class="flaticon2-refresh-button"></i>
                        </button>
                    </div>

                    <div class="kt-inbox__panel">
                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Archive">
                            <i class="flaticon2-layers-1"></i>
                        </button>
                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Spam">
                            <i class="flaticon2-information"></i>
                        </button>
                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Delete">
                            <i class="flaticon2-rubbish-bin"></i>
                        </button>
                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Mark as read">
                            <i class="flaticon2-writing"></i>
                        </button>
                        <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="Move">
                            <i class="flaticon2-expand"></i>
                        </button>
                    </div>
                </div>
                <div class="kt-inbox__search">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search">
                        <div class="input-group-append">
                            <span class="input-group-text">
                                <i class="flaticon2-magnifier-tool"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="kt-inbox__controls">
                    <div class="kt-inbox__pages" data-toggle="kt-tooltip" title="" data-original-title="Records per page">
                        <span class="kt-inbox__perpage" data-toggle="dropdown">1 - 50 of 235</span>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-xs">
                            <ul class="kt-nav">
                                <li class="kt-nav__item">
                                    <a href="#" class="kt-nav__link">
                                        <span class="kt-nav__link-text">20 per page</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item kt-nav__item--active">
                                    <a href="#" class="kt-nav__link">
                                        <span class="kt-nav__link-text">50 par page</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="#" class="kt-nav__link">
                                        <span class="kt-nav__link-text">100 per page</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="" data-original-title="Previose page">
                        <i class="flaticon2-left-arrow"></i>
                    </button>

                    <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="" data-original-title="Next page">
                        <i class="flaticon2-right-arrow"></i>
                    </button>

                    <div class="kt-inbox__sort" data-toggle="kt-tooltip" title="" data-original-title="Sort">
                        <button type="button" class="kt-inbox__icon" data-toggle="dropdown">
                            <i class="flaticon2-console"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-xs">
                            <ul class="kt-nav">
                                <li class="kt-nav__item kt-nav__item--active">
                                    <a href="#" class="kt-nav__link">
                                        <span class="kt-nav__link-text">Newest</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="#" class="kt-nav__link">
                                        <span class="kt-nav__link-text">Olders</span>
                                    </a>
                                </li>
                                <li class="kt-nav__item">
                                    <a href="#" class="kt-nav__link">
                                        <span class="kt-nav__link-text">Unread</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="btn-group" data-toggle="kt-tooltip" title="" data-original-title="Settings">
                        <button type="button" class="kt-inbox__icon" data-toggle="dropdown">
                            <i class="flaticon-more-1"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right dropdown-menu-fit dropdown-menu-md">
                            <!--begin::Nav-->
<ul class="kt-nav">
    <li class="kt-nav__head">
        Export Options
        <i class="flaticon2-information" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more..."></i>
    </li>
    <li class="kt-nav__separator"></li>
    <li class="kt-nav__item">
        <a href="#" class="kt-nav__link">
            <i class="kt-nav__link-icon flaticon2-drop"></i>
            <span class="kt-nav__link-text">Users</span>
        </a>
    </li>
    <li class="kt-nav__item">
        <a href="#" class="kt-nav__link">
            <i class="kt-nav__link-icon flaticon2-calendar-8"></i>
            <span class="kt-nav__link-text">Reports</span>
            <span class="kt-nav__link-badge">
              <span class="kt-badge kt-badge--bold kt-badge--danger">9</span>
            </span>
        </a>
    </li>
    <li class="kt-nav__item">
        <a href="#" class="kt-nav__link">
            <i class="kt-nav__link-icon flaticon2-drop"></i>
            <span class="kt-nav__link-text">Statements</span>
        </a>
    </li>
    <li class="kt-nav__item">
        <a href="#" class="kt-nav__link">
            <i class="kt-nav__link-icon flaticon2-new-email"></i>
            <span class="kt-nav__link-text">Customer Support</span>
        </a>
    </li>
    <li class="kt-nav__separator"></li>
    <li class="kt-nav__foot">
        <a class="btn btn-label-brand btn-bold btn-sm" href="#">Proceed</a>
        <a class="btn btn-clean btn-bold btn-sm" href="#" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Click to learn more...">Learn more</a>
    </li>
</ul>
<!--end::Nav-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="kt-portlet__body kt-portlet__body--fit-x">
            <div class="kt-inbox__items" data-type="draft">
                <div class="kt-inbox__item" data-id="16" data-type="draft">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--dark">
                                <span>WE</span>
                            </span>
                            <a href="#" class="kt-inbox__author">00:00:00 ~ 12:34:56</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Verification of your card transaction - </span>
                            <span class="kt-inbox__summary">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        25 May
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="17" data-type="draft">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_15.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">00:00:00 ~ 12:34:56</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Payment Notification (DE223232034) - </span>
                            <span class="kt-inbox__summary">This is to confirm that you have used your credit/debit card for the booking. If you did not make this booking, please contact us immediately....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        May 23
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="18" data-type="draft">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_24.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">00:00:00 ~ 12:34:56</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Verification of your card transaction - </span>
                            <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Apr 12
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End:: Inbox List-->
</div>


</div>
</template>

<script>

export default {
  components: {
  },
};
</script>
