<template>
  <div>
      <div class="page-content-wrapper">
        <div class="page-content-wrapper-inner">
          <div class="content-viewport">
            <div class="row">
              <div class="col-12 py-5">
                <h4>자막 편집화면</h4>
                <p class="text-gray">Welcome to AAS</p>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="grid">
                  <div class="item-wrapper">
                    <div class="table-responsive">
                      <table class="table table-hover">
                        <colgroup>
                          <col width="5%"/>
                          <col width="25%"/>
                          <col width="70%"/>
                        </colgroup>
                        <tbody>
                          <tr>
                            <td class="actions">
                              <i class="mdi mdi-arrow-right-drop-circle-outline" style="color:#696ffb; font-size:20px;"></i>
                            </td>
                            <td class="d-flex align-items-center">
                              <span>00:00:00 ~ 00:00:02</span>
                            </td>
                            <td>
                              <div class="col-md-9 showcase_content_area" style="max-width:100%;">
                                <input type="text" class="form-control form-control-lg" id="inputType12" value="안녕하세요 여러분, 디에디트 에디터 H">
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="actions">
                              <i class="mdi mdi-arrow-right-drop-circle-outline" style="color:#696ffb; font-size:20px;"></i>
                            </td>
                            <td class="d-flex align-items-center">
                              <span>00:00:02 ~ 00:00:04</span>
                            </td>
                            <td>
                              <div class="col-md-9 showcase_content_area" style="max-width:100%;">
                                <input type="text" class="form-control form-control-lg" id="inputType12" value="에디터 M 입니다">
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="actions">
                              <i class="mdi mdi-arrow-right-drop-circle-outline" style="color:#696ffb; font-size:20px;"></i>
                            </td>
                            <td class="d-flex align-items-center">
                              <span>00:00:04 ~ 00:00:07</span>
                            </td>
                            <td>
                              <div class="col-md-9 showcase_content_area" style="max-width:100%;">
                                <input type="text" class="form-control form-control-lg" id="inputType12" value="여러분 혹시 2년전에 올라왔던 화제의 그 영상 기억 나시나요">
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td class="actions">
                              <i class="mdi mdi-arrow-right-drop-circle-outline" style="color:#696ffb; font-size:20px;"></i>
                            </td>
                            <td class="d-flex align-items-center">
                              <span>00:00:07 ~ 00:00:11</span>
                            </td>
                            <td>
                              <div class="col-md-9 showcase_content_area" style="max-width:100%;">
                                <input type="text" class="form-control form-control-lg" id="inputType12" value="디에디트 최초의 뷰티 리뷰였죠?">
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content viewport ends -->
        <!-- partial:partials/_footer.html -->
        <footer class="footer">
          <div class="row">
            <div class="col-sm-6 text-center text-sm-right order-sm-1">
              <ul class="text-gray">
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div class="col-sm-6 text-center text-sm-left mt-3 mt-sm-0">
              <small class="text-muted d-block">Copyright © 2019 <a href="http://www.uxcandy.co" target="_blank">UXCANDY</a>. All rights reserved</small>
              <small class="text-gray mt-2">Handcrafted With <i class="mdi mdi-heart text-danger"></i></small>
            </div>
          </div>
        </footer>
        <!-- partial -->
      </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  name: 'Content',
};
</script>

<style scoped>
</style>