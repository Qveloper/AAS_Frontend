<template>
<!-- begin:: Content -->
<div class="kt-container  kt-grid__item kt-grid__item--fluid">
  <!--[html-partial:begin:{"id":"demo3/dist/inc/view/demos/pages/index","page":"index"}]/-->

  <!--[html-partial:begin:{"id":"demo3/dist/inc/view/partials/content/dashboards/dashboard-4","page":"index"}]/-->
  <!--begin::Dashboard 4-->
  <div class="kt-grid kt-grid--desktop kt-grid--ver-desktop  kt-inbox" id="kt_inbox">
    <!--Begin::Aside Mobile Toggle-->
    <!-- <button class="kt-inbox__aside-close" id="kt_inbox_aside_close">
        <i class="la la-close"></i>
    </button> -->
    <!--End:: Aside Mobile Toggle-->

    <!--Begin:: Inbox Aside-->
    <div class="kt-grid__item kt-portlet kt-inbox__aside" id="kt_inbox_aside" style="opacity: 1;">
        <button type="button" class="btn btn-brand  btn-upper btn-bold  kt-inbox__compose" data-toggle="modal" data-target="#kt_inbox_compose">
            <i class="flaticon2-send-1"></i> new message
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
                <div class="kt-inbox__item kt-inbox__item--unread" data-id="1" data-type="inbox">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--danger" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_1.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Matt Pears</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Your iBuy.com grocery shopping confirmation - </span>
                            <span class="kt-inbox__summary">Thank you for ordering alternate camera angles...</span>
                        </div>
                        <div class="kt-inbox__labels">
                            <span class="kt-inbox__label kt-badge kt-badge--unified-brand kt-badge--bold kt-badge--inline">inbox</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        8:30 PM
                    </div>
                </div>
                <div class="kt-inbox__item kt-inbox__item--unread" data-id="2" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--danger">
                                <span>JM</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Jason Muller</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Digital PPV Customer Confirmation - </span>
                            <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        day ago
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="3" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--warning">
                                <span>EF</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Enrico Fermi</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Payment Notification DLOP2329KD - </span>
                            <span class="kt-inbox__summary">Your Order #224820998666029 has been placed on Saturday, 29 June, 2019 10:02:41 via Online Banking...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        11:20PM
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="4" data-type="inbox">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_7.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Charlie Stone</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Your Order #224820998666029 has been Confirmed - </span>
                            <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        2 days ago
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="5" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--success">
                                <span>MP</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Max O'Brien Planck</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Pay bills &amp; win up to 600$ Cashback! - </span>
                            <span class="kt-inbox__summary">Congratulations on your iRun Coach subscription. You made no space for excuses and you decided on a healthier and happier life...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Jul 25
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="6" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_4.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Teresa Fox</a></div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Congratulations on your iRun Coach subscription - </span>
                            <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        July 24
                    </div>
                </div>
                <div class="kt-inbox__item kt-inbox__item--unread" data-id="7" data-type="inbox">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_21.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Luka Doncic</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">About your request for PalmLake - </span>
                            <span class="kt-inbox__summary">Thank you for creating a LIPO Account. Please click the link below to activate your account. This link will expire in 24 hours...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Jun 13
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="8" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--primary">
                                <span>WE</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Wolfgang Ernst Pauli</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Activate your LIPO Account today - </span>
                            <span class="kt-inbox__summary">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        25 May
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="9" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_13.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Carles Puyol</a>
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
                <div class="kt-inbox__item" data-id="10" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_12.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Jimmy Grey</a>
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
                <div class="kt-inbox__item" data-id="11" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_5.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Patty Jo Watson</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Optimize with Recommendations, now used by most advertisers - </span>
                            <span class="kt-inbox__summary">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Mar 1
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="12" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--warning">
                                <span>RW</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Roberts O'Neill Wilson</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Welcome, Patty  - </span>
                            <span class="kt-inbox__summary">Your weekly report is a good way to track your performance. See what’s working so far and explore new opportunities for improvement....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Feb 11
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="13" data-type="inbox">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_3.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Nick Mana</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Pro Article Marketing Guide - </span>
                            <span class="kt-inbox__summary">Video has rolled into every marketing platform or channel, leaving...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime">
                        Jan 24
                    </div>
                </div>

                <div class="kt-inbox__item kt-inbox__item--unread" data-id="14" data-type="marked">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_5.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Lebron King James </a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Free Video Marketing Guide - </span>
                            <span class="kt-inbox__summary">Video has rolled into every marketing platform or channel, leaving...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime">
                        Jan 24
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="15" data-type="marked">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_2.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Anna Strong</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Pay bills &amp; win up to 600$ Cashback! - </span>
                            <span class="kt-inbox__summary">Video has rolled into every marketing platform or channel, leaving...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime">
                        Jan 24
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="61" data-type="marked">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_5.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Jimmy Yesuku</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Free Video Marketing Guide - </span>
                            <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        July 24
                    </div>
                </div>
                <div class="kt-inbox__item kt-inbox__item--unread" data-id="71" data-type="marked">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_3.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Chris Bent</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">About your request for PalmLake - </span>
                            <span class="kt-inbox__summary">Thank you for creating a LIPO Account. Please click the link below to activate your account. This link will expire in 24 hours...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Jun 13
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="8" data-type="marked">
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
                            <a href="#" class="kt-inbox__author">Wolfgang Ernst Pauli</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Activate your LIPO Account today - </span>
                            <span class="kt-inbox__summary">What you requested can't be arranged ahead of time but PalmLake said they'll do their best to accommodate you upon arrival....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        25 May
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="9" data-type="marked">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_5.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Patty Jo Watson</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Payment Notification (DE223232034) - </span>
                            <span class="kt-inbox__summary">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Mar 1
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="10" data-type="marked">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_22.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Max Born</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Welcome, Patty  - </span>
                            <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Apr 12
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="11" data-type="marked">
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
                            <span class="kt-media kt-media--circle kt-media--sm" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_12.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Sarah Boysen</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">About your request for PalmLake - </span>
                            <span class="kt-inbox__summary">This is to confirm that you have used your credit/debit card for the booking. If you did not make this booking, please contact us immediately....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        May 23
                    </div>
                </div>

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
                            <a href="#" class="kt-inbox__author">Wolfgang Ernst Pauli</a>
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
                            <a href="#" class="kt-inbox__author">Megan Higgins</a>
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
                            <a href="#" class="kt-inbox__author">Chelsea Hughes</a>
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

                <div class="kt-inbox__item" data-id="19" data-type="sent">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_6.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Luke Davids</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Welcome, Patty  - </span>
                            <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Apr 12
                    </div>
                </div>
                <div class="kt-inbox__item kt-inbox__item--unread" data-id="20" data-type="sent">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_15.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Karl Hugo</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Payment Notification (DE223232034) - </span>
                            <span class="kt-inbox__summary">Discover interesting ideas and unique perspectives. Read, explore and follow your interests. Get personalized recommendations delivered to you....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Mar 1
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="21" data-type="sent">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--warning">
                                <span>RW</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Roberts O'Neill Wilson</a>
                        </div>
                    </div>
                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Your Order #224820998666029 has been Confirmed - </span>
                            <span class="kt-inbox__summary">Your weekly report is a good way to track your performance. See what’s working so far and explore new opportunities for improvement....</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Feb 11
                    </div>
                </div>

                <div class="kt-inbox__item kt-inbox__item--unread" data-id="22" data-type="trash">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand">
                                <span>CH</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Chelsea Hughes</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Optimize with Recommendations, now used by most advertisers - </span>
                            <span class="kt-inbox__summary">Your Order #224820998666029 has been placed on Saturday, 29 June, 2019 10:02:41 via Online Banking...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        11:20PM
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="23" data-type="trash">
                    <div class="kt-inbox__info">
                        <div class="kt-inbox__actions">
                            <label class="kt-checkbox kt-checkbox--single kt-checkbox--tick kt-checkbox--brand">
                                <input type="checkbox">
                                <span></span>
                            </label>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Star">
                                <i class="flaticon-star"></i>
                            </span>
                            <span class="kt-inbox__icon kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="right" title="" data-original-title="Mark as important">
                                <i class="flaticon-add-label-button"></i>
                            </span>
                        </div>
                        <div class="kt-inbox__sender" data-toggle="view">
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_10.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Lisa Moss</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Congratulations on your iRun Coach subscription - </span>
                            <span class="kt-inbox__summary">Your payment of 4500USD to AirCar has been authorized and confirmed, thank you...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        2 days ago
                    </div>
                </div>
                <div class="kt-inbox__item kt-inbox__item--unread" data-id="24" data-type="trash">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--success">
                                <span>MP</span>
                            </span>
                            <a href="#" class="kt-inbox__author">Max O'Brien Planck</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Payment Notification DLOP2329KD - </span>
                            <span class="kt-inbox__summary">Congratulations on your iRun Coach subscription. You made no space for excuses and you decided on a healthier and happier life...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        Jul 25
                    </div>
                </div>
                <div class="kt-inbox__item" data-id="25" data-type="trash">
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
                            <span class="kt-media kt-media--circle kt-media--sm kt-media--brand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_16.jpg')">
                                <span></span>
                            </span>
                            <a href="#" class="kt-inbox__author">Lisa Moss</a>
                        </div>
                    </div>

                    <div class="kt-inbox__details" data-toggle="view">
                        <div class="kt-inbox__message">
                            <span class="kt-inbox__subject">Pay bills &amp; win up to 600$ Cashback! - </span>
                            <span class="kt-inbox__summary">Please make sure that you have one of the following cards with you when we deliver your order...</span>
                        </div>
                    </div>
                    <div class="kt-inbox__datetime" data-toggle="view">
                        July 24
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End:: Inbox List-->

    <!--Begin:: Inbox View-->
    <div class="kt-grid__item kt-grid__item--fluid    kt-portlet    kt-inbox__view kt-inbox__view--shown-" id="kt_inbox_view" style="display: none;">
        <div class="kt-portlet__head">
            <div class="kt-inbox__toolbar">
                <div class="kt-inbox__actions">
                    <a href="#" class="kt-inbox__icon kt-inbox__icon--back">
                        <i class="flaticon2-left-arrow-1"></i>
                    </a>

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
                <div class="kt-inbox__controls">
                    <span class="kt-inbox__pages" data-toggle="kt-tooltip" title="" data-original-title="Records per page">
                        <span class="kt-inbox__perpage" data-toggle="dropdown">3 of 230 pages</span>
                    </span>

                    <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="" data-original-title="Previose message">
                        <i class="flaticon2-left-arrow"></i>
                    </button>

                    <button class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" title="" data-original-title="Next message">
                        <i class="flaticon2-right-arrow"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="kt-portlet__body kt-portlet__body--fit-x">
            <div class="kt-inbox__subject">
                <div class="kt-inbox__title">
                    <h3 class="kt-inbox__text">Trip Reminder. Thank you for flying with us!</h3>
                    <span class="kt-inbox__label kt-badge kt-badge--unified-brand kt-badge--bold kt-badge--inline">
                        inbox
                    </span>
                    <span class="kt-inbox__label kt-badge kt-badge--unified-danger kt-badge--bold kt-badge--inline">
                        important
                    </span>
                </div>
                <div class="kt-inbox__actions">
                    <a href="#" class="kt-inbox__icon">
                        <i class="flaticon2-sort"></i>
                    </a>
                    <a href="#" class="kt-inbox__icon">
                        <i class="flaticon2-fax"></i>
                    </a>
                </div>
            </div>

            <div class="kt-inbox__messages">
                <div class="kt-inbox__message kt-inbox__message--expanded">
                    <div class="kt-inbox__head">
                        <span class="kt-media" data-toggle="expand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/100_5.jpg')">
                            <span></span>
                        </span>
                        <div class="kt-inbox__info">
                            <div class="kt-inbox__author" data-toggle="expand">
                                <a href="#" class="kt-inbox__name">Caleb Dixon</a>

                                <div class="kt-inbox__status">
                                    <span class="kt-badge kt-badge--success kt-badge--dot"></span> 1 Day ago
                                </div>
                            </div>
                            <div class="kt-inbox__details">
                                <div class="kt-inbox__tome">
                                    <span class="kt-inbox__label" data-toggle="dropdown">
                                        to me <i class="flaticon2-down"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-left">
                                        <table class="kt-inbox__details">
                                            <tbody><tr>
                                                <td>from</td>
                                                <td>Mark Andre</td>
                                            </tr>
                                            <tr>
                                                <td>date:</td>
                                                <td>Jul 30, 2019, 11:27 PM</td>
                                            </tr>
                                            <tr>
                                                <td>from:</td>
                                                <td>Mark Andre</td>
                                            </tr>
                                            <tr>
                                                <td>subject:</td>
                                                <td>Trip Reminder. Thank you for flying with us!</td>
                                            </tr>
                                            <tr>
                                                <td>reply to:</td>
                                                <td>mark.andre@gmail.com</td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                </div>
                                <div class="kt-inbox__desc" data-toggle="expand">
                                     Headine try at attention-grabbing to the body of your blog post....
                                </div>
                            </div>
                        </div>
                        <div class="kt-inbox__actions">
                            <div class="kt-inbox__datetime" data-toggle="expand">
                                Jul 15, 2019, 11:19AM
                            </div>

                            <div class="kt-inbox__group">
                                <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Star">
                                    <i class="flaticon-star"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Mark as important">
                                    <i class="flaticon-add-label-button"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--reply" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Reply">
                                    <i class="flaticon2-reply-1"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Settings">
                                    <i class="flaticon-more"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="kt-inbox__body">
                        <div class="kt-inbox__text">
                            <p>Hi Bob,</p>
                            <p class="kt-margin-t-25">
                                With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.
                            </p>
                            <p class="kt-margin-t-25">
                                Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang

                            </p>
                            <p class="kt-margin-t-25">
                                Best regards,
                            </p>
                            <p>
                                Jason Muller
                            </p>
                        </div>
                    </div>
                </div>
                <div class="kt-inbox__message">
                    <div class="kt-inbox__head">
                        <span class="kt-media" data-toggle="expand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_19.jpg')">
                            <span></span>
                        </span>

                        <div class="kt-inbox__info">
                            <div class="kt-inbox__author" data-toggle="expand">
                                <a href="#" class="kt-inbox__name">Alivia Sutton</a>

                                <div class="kt-inbox__status">
                                    <span class="kt-badge kt-badge--success kt-badge--dot"></span> 2 Day ago
                                </div>
                            </div>
                            <div class="kt-inbox__details">
                                <div class="kt-inbox__tome">
                                    <span class="kt-inbox__label" data-toggle="dropdown">
                                        to me <i class="flaticon2-down"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-left">
                                        <table class="kt-inbox__details">
                                            <tbody><tr>
                                                <td>from</td>
                                                <td>Mark Andre</td>
                                            </tr>
                                            <tr>
                                                <td>date:</td>
                                                <td>Jul 30, 2019, 11:27 PM</td>
                                            </tr>
                                            <tr>
                                                <td>from:</td>
                                                <td>Mark Andre</td>
                                            </tr>
                                            <tr>
                                                <td>subject:</td>
                                                <td>Trip Reminder. Thank you for flying with us!</td>
                                            </tr>
                                            <tr>
                                                <td>reply to:</td>
                                                <td>mark.andre@gmail.com</td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                </div>

                                <div class="kt-inbox__desc" data-toggle="expand">
                                    Jornalists call this critical, introductory section the "Lede," and when bridge properly executed....
                                </div>
                            </div>
                        </div>

                        <div class="kt-inbox__actions">
                            <div class="kt-inbox__datetime" data-toggle="expand">
                                Jul 20, 2019, 03:20PM
                            </div>

                            <div class="kt-inbox__group">
                                <span class="kt-inbox__icon  kt-inbox__icon--sm kt-inbox__icon--label kt-inbox__icon--on" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Star">
                                    <i class="flaticon-star"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Mark as important">
                                    <i class="flaticon-add-label-button"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Reply">
                                    <i class="flaticon2-reply-1"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Settings">
                                    <i class="flaticon-more"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="kt-inbox__body">
                        <p>Hi,</p>
                        <p class="kt-margin-t-25">
                            The guide price is based on today's prices instore. However as we shop for your order on the day you want it delivered, some of the prices may have changed. Weighed products: the guide price on the website uses an estimate weight for weighed products such as grapes or cheese. But what you pay will be based on the exact weight of your product, so the price may vary slightly.
                        </p>
                        <p class="kt-margin-t-25">
                            Best regards,
                            <br> Jason Muller
                        </p>
                    </div>
                </div>
                <div class="kt-inbox__message">
                    <div class="kt-inbox__head">
                        <span class="kt-media" data-toggle="expand" style="background-image: url('/keen/themes/keen/theme/demo3/dist/assets/media/users/300_22.jpg')">
                            <span></span>
                        </span>

                        <div class="kt-inbox__info">
                            <div class="kt-inbox__author" data-toggle="expand">
                                <a href="#" class="kt-inbox__name">Peyton Gilliam</a>

                                <div class="kt-inbox__status">
                                    <span class="kt-badge kt-badge--success kt-badge--dot"></span> 1 Day ago
                                </div>
                            </div>
                            <div class="kt-inbox__details">
                                <div class="kt-inbox__tome">
                                    <span class="kt-inbox__label" data-toggle="dropdown">
                                        to me <i class="flaticon2-down"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-fit dropdown-menu-md dropdown-menu-left">
                                        <table class="kt-inbox__details">
                                            <tbody><tr>
                                                <td>from</td>
                                                <td>Mark Andre</td>
                                            </tr>
                                            <tr>
                                                <td>date:</td>
                                                <td>Jul 30, 2019, 11:27 PM</td>
                                            </tr>
                                            <tr>
                                                <td>from:</td>
                                                <td>Mark Andre</td>
                                            </tr>
                                            <tr>
                                                <td>subject:</td>
                                                <td>Trip Reminder. Thank you for flying with us!</td>
                                            </tr>
                                            <tr>
                                                <td>reply to:</td>
                                                <td>mark.andre@gmail.com</td>
                                            </tr>
                                        </tbody></table>
                                    </div>
                                </div>

                                <div class="kt-inbox__desc" data-toggle="expand">
                                    With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part....
                                </div>
                            </div>
                        </div>

                        <div class="kt-inbox__actions">
                            <div class="kt-inbox__datetime">
                                Jul 15, 2019, 11:19AM
                            </div>

                            <div class="kt-inbox__group">
                                <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label kt-inbox__icon--label--on" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Star">
                                    <i class="flaticon-star"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm kt-inbox__icon--label" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Mark as important">
                                    <i class="flaticon-add-label-button"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Reply">
                                    <i class="flaticon2-reply-1"></i>
                                </span>
                                <span class="kt-inbox__icon kt-inbox__icon--sm" data-toggle="kt-tooltip" data-placement="top" title="" data-original-title="Settings">
                                    <i class="flaticon-more"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="kt-inbox__body">
                        <p>Hi Bob,</p>
                        <p class="kt-margin-t-25">
                            With resrpect, i must disagree with Mr.Zinsser. We all know the most part of important part of any article is the title.Without a compelleing title, your reader won't even get to the first sentence.After the title, however, the first few sentences of your article are certainly the most important part.
                        </p>
                        <p class="kt-margin-t-25">
                            Jornalists call this critical, introductory section the "Lede," and when bridge properly executed, it's the that carries your reader from an headine try at attention-grabbing to the body of your blog post, if you want to get it right on of these 10 clever ways to omen your next blog posr with a bang

                        </p>
                        <p class="kt-margin-t-25">
                            Best regards,
                        </p>
                        <p>
                            Jason Muller
                        </p>
                    </div>
                </div>
            </div>

            <div class="kt-inbox__reply kt-inbox__reply--on">
                <div class="kt-inbox__actions">
                    <button class="btn btn-secondary btn-bold">
                        <i class="flaticon2-reply-1 kt-font-brand"></i> Reply
                    </button>

                    <button class="btn btn-secondary btn-bold">
                        <i class="flaticon2-left-arrow-1 kt-font-brand"></i> Forward
                    </button>
                </div>

                <div class="kt-inbox__form" id="kt_inbox_reply_form">
                    <div class="kt-inbox__body">
                        <div class="kt-inbox__to">
                            <div class="kt-inbox__wrapper">
                                <div class="kt-inbox__field kt-inbox__field--to">
                                    <div class="kt-inbox__label">
                                        To:
                                    </div>
                                    <div class="kt-inbox__input">
                                        <tags class="tagify  " aria-haspopup="true" aria-expanded="false" role="tagslist">
                <tag title="Chris Muller" contenteditable="false" spellcheck="false" class="tagify__tag tagify__tag--brand tagify--noAnim" role="tag" pic="./assets/media/users/100_11.jpg" email="chris.muller@wix.com" value="Chris Muller"><x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span class="tagify__tag-text">Chris Muller</span></div></tag><tag title="Lina Nilson" contenteditable="false" spellcheck="false" class="tagify__tag tagify__tag--brand tagify--noAnim" role="tag" pic="./assets/media/users/100_15.jpg" initialsstate="danger" initials="LN" email="lina.nilson@loop.com" value="Lina Nilson"><x title="" class="tagify__tag__removeBtn" role="button" aria-label="remove tag"></x><div><span class="tagify__tag-text">Lina Nilson</span></div></tag><span contenteditable="" data-placeholder="​" aria-placeholder="" class="tagify__input" role="textbox" aria-multiline="false"></span>
            </tags><input type="text" name="compose_to" value="Chris Muller, Lina Nilson">
                                    </div>
                                    <div class="kt-inbox__tools">
                                        <span class="kt-inbox__tool kt-inbox__tool--cc">Cc</span>
                                        <span class="kt-inbox__tool kt-inbox__tool--bcc">Bcc</span>
                                    </div>
                                </div>
                                <div class="kt-inbox__field kt-inbox__field--cc">
                                    <div class="kt-inbox__label">
                                        Cc:
                                    </div>
                                    <div class="kt-inbox__input">
                                        <tags class="tagify  " aria-haspopup="true" aria-expanded="false" role="tagslist">
                <span contenteditable="" data-placeholder="​" aria-placeholder="" class="tagify__input" role="textbox" aria-multiline="false"></span>
            </tags><input type="text" name="compose_cc">
                                    </div>
                                    <div class="kt-inbox__tools">
                                        <button type="button" class="kt-inbox__icon kt-inbox__icon--delete kt-inbox__icon--sm">
                                            <i class="flaticon2-cross"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="kt-inbox__field kt-inbox__field--bcc">
                                    <div class="kt-inbox__label">
                                        Bcc:
                                    </div>
                                    <div class="kt-inbox__input">
                                        <tags class="tagify  " aria-haspopup="true" aria-expanded="false" role="tagslist">
                <span contenteditable="" data-placeholder="​" aria-placeholder="" class="tagify__input" role="textbox" aria-multiline="false"></span>
            </tags><input type="text" name="compose_bcc">
                                    </div>
                                    <div class="kt-inbox__tools">
                                        <button type="button" class="kt-inbox__icon kt-inbox__icon--delete kt-inbox__icon--sm">
                                            <i class="flaticon2-cross"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ql-toolbar ql-snow"><span class="ql-formats"><span class="ql-header ql-picker"><span class="ql-picker-label" tabindex="0" role="button" aria-expanded="false" aria-controls="ql-picker-options-0"><svg viewBox="0 0 18 18"> <polygon class="ql-stroke" points="7 11 9 13 11 11 7 11"></polygon> <polygon class="ql-stroke" points="7 7 9 5 11 7 7 7"></polygon> </svg></span><span class="ql-picker-options" aria-hidden="true" tabindex="-1" id="ql-picker-options-0"><span tabindex="0" role="button" class="ql-picker-item" data-value="1"></span><span tabindex="0" role="button" class="ql-picker-item" data-value="2"></span><span tabindex="0" role="button" class="ql-picker-item" data-value="3"></span><span tabindex="0" role="button" class="ql-picker-item ql-selected"></span></span></span><select class="ql-header" style="display: none;"><option value="1"></option><option value="2"></option><option value="3"></option><option selected="selected"></option></select></span><span class="ql-formats"><button type="button" class="ql-bold"><svg viewBox="0 0 18 18"> <path class="ql-stroke" d="M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z"></path> <path class="ql-stroke" d="M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z"></path> </svg></button><button type="button" class="ql-italic"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="7" x2="13" y1="4" y2="4"></line> <line class="ql-stroke" x1="5" x2="11" y1="14" y2="14"></line> <line class="ql-stroke" x1="8" x2="10" y1="14" y2="4"></line> </svg></button><button type="button" class="ql-underline"><svg viewBox="0 0 18 18"> <path class="ql-stroke" d="M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3"></path> <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="12" x="3" y="15"></rect> </svg></button><button type="button" class="ql-link"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="7" x2="11" y1="7" y2="11"></line> <path class="ql-even ql-stroke" d="M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z"></path> <path class="ql-even ql-stroke" d="M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z"></path> </svg></button></span><span class="ql-formats"><button type="button" class="ql-list" value="ordered"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="7" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="7" x2="15" y1="9" y2="9"></line> <line class="ql-stroke" x1="7" x2="15" y1="14" y2="14"></line> <line class="ql-stroke ql-thin" x1="2.5" x2="4.5" y1="5.5" y2="5.5"></line> <path class="ql-fill" d="M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z"></path> <path class="ql-stroke ql-thin" d="M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156"></path> <path class="ql-stroke ql-thin" d="M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109"></path> </svg></button><button type="button" class="ql-list" value="bullet"><svg viewBox="0 0 18 18"> <line class="ql-stroke" x1="6" x2="15" y1="4" y2="4"></line> <line class="ql-stroke" x1="6" x2="15" y1="9" y2="9"></line> <line class="ql-stroke" x1="6" x2="15" y1="14" y2="14"></line> <line class="ql-stroke" x1="3" x2="3" y1="4" y2="4"></line> <line class="ql-stroke" x1="3" x2="3" y1="9" y2="9"></line> <line class="ql-stroke" x1="3" x2="3" y1="14" y2="14"></line> </svg></button></span><span class="ql-formats"><button type="button" class="ql-clean"><svg class="" viewBox="0 0 18 18"> <line class="ql-stroke" x1="5" x2="13" y1="3" y2="3"></line> <line class="ql-stroke" x1="6" x2="9.35" y1="12" y2="3"></line> <line class="ql-stroke" x1="11" x2="15" y1="11" y2="15"></line> <line class="ql-stroke" x1="15" x2="11" y1="11" y2="15"></line> <rect class="ql-fill" height="1" rx="0.5" ry="0.5" width="7" x="2" y="14"></rect> </svg></button></span></div><div class="kt-inbox__editor ql-container ql-snow" id="kt_inbox_reply_editor" style="height: 200px;"><div class="ql-editor ql-blank" data-gramm="false" contenteditable="true" data-placeholder="Type message..."><p><br></p></div><div class="ql-clipboard" contenteditable="true" tabindex="-1"></div><div class="ql-tooltip ql-hidden"><a class="ql-preview" rel="noopener noreferrer" target="_blank" href="about:blank"></a><input type="text" data-formula="e=mc^2" data-link="https://quilljs.com" data-video="Embed URL"><a class="ql-action"></a><a class="ql-remove"></a></div></div>

                        <div class="kt-inbox__attachments">
                            <div class="dropzone dropzone-multi" id="kt_inbox_reply_attachments">
                                <div class="dropzone-items">
                                    
                                    
                                </div>
                            <div class="dz-default dz-message"><span>Drop files here to upload</span></div></div>
                        </div>
                    </div>
                    <div class="kt-inbox__foot">
                        <div class="kt-inbox__primary">
                            <div class="btn-group">
                                <button type="button" class="btn btn-brand btn-bold">
                                    Send
                                </button>

                                <button type="button" class="btn btn-brand btn-bold dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                </button>

                                <div class="dropdown-menu dropup dropdown-menu-fit dropdown-menu-right">
                                    <ul class="kt-nav">
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link">
                                                <i class="kt-nav__link-icon flaticon2-writing"></i>
                                                <span class="kt-nav__link-text">Schedule Send</span>
                                            </a>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link">
                                                <i class="kt-nav__link-icon flaticon2-medical-records"></i>
                                                <span class="kt-nav__link-text">Save &amp; archive</span>
                                            </a>
                                        </li>
                                        <li class="kt-nav__item">
                                            <a href="#" class="kt-nav__link">
                                                <i class="kt-nav__link-icon flaticon2-hourglass-1"></i>
                                                <span class="kt-nav__link-text">Cancel</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="kt-inbox__panel">
                                <button class="kt-inbox__icon dz-clickable" id="kt_inbox_reply_attachments_select">
                                    <i class="flaticon2-clip-symbol"></i>
                                </button>
                                <button class="kt-inbox__icon">
                                    <i class="flaticon2-pin"></i>
                                </button>
                            </div>
                        </div>

                        <div class="kt-inbox__secondary">
                            <button class="kt-inbox__icon" data-toggle="kt-tooltip" title="" data-original-title="More actions">
                                <i class="flaticon2-settings"></i>
                            </button>
                            <button class="kt-inbox__icon kt-inbox__icon--remove" data-toggle="kt-tooltip" title="" data-original-title="Dismiss reply">
                                <i class="flaticon2-rubbish-bin-delete-button"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--End:: Inbox View-->
</div>


</div>
</template>

<script>

export default {
  components: {
  },
};
</script>
