<!DOCTYPE html>
<html lang="ko">
<?include "../inc/head.php"?>
  <body>
    <div class="wrap">
      <?include "../inc/header.php"?>
      <div class="container_wrap">
        <div class="container_inner">
          <div class="content">

<div class="mdl-mbs mdl-find find_00">

	<div class="mdl-section">
		<div class="mdl-half mdl-id">
			<div class="mdl-tit">
				<i></i><strong>아이디 찾기 <span>회원가입 시 입력한 이름과 이메일을 <br/> 정확히 입력해주세요.</span></strong>
			</div>
			<div class="mdl-input">
				<form name="frm_id" action="./find.act.php" method="post" enctype="multipart/form-data" autocomplete="off" onSubmit="return chkForm(this);">
				<input type="hidden" name="act" value="find_id">
					<dl>
						<dt><label for="find-id-name">이름</label></dt>
						<dd><input type="text" name="name" id="find-id-name"tabindex="1" exp="이름을" /></dd>
					</dl>
					<dl>
						<dt><label for="ind-id-id">이메일</label></dt>
						<dd><input type="text" name="email" id="ind-id-id" tabindex="2" exp="이메일을" /></dd>
					</dl>
					<input type="submit" value="찾기" class="mdl-submit hand" />
				</form>
			</div>
		</div>
		<div class="mdl-half mdl-pw">
			<div class="mdl-tit">
				<i></i><strong>비밀번호 찾기 <span>회원가입 시 입력한 이름과 이메일, <br/>아이디를 정확히 입력해주세요.</span></strong>
			</div>
			<div class="mdl-input">
				<form name="frm_pwd" action="./find.act.php" method="post" enctype="multipart/form-data" autocomplete="off" onSubmit="return chkForm(this);">
				<input type="hidden" name="act" value="find_pwd">
					<dl>
						<dt><label for="find-pw-name">이름</label></dt>
						<dd><input type="text" name="name" id="find-pw-name" tabindex="3" exp="이름을" /></dd>
					</dl>
					<dl>
						<dt><label for="find-pw-mail">이메일</label></dt>
						<dd><input type="text" name="email" id="find-pw-mail" tabindex="4"  exp="이메일을" /></dd>
					</dl>
					<dl>
						<dt><label for="find-pw-id">아이디</label></dt>
						<dd><input type="text" name="id" id="find-pw-id"  tabindex="5" exp="아이디를" /></dd>
					</dl>
					<input type="submit" value="찾기" class="mdl-submit hand" />
				</form>
			</div>
		</div>
	</div>

</div>

          </div><!-- content end -->
        </div><!-- container_inner end -->
      </div><!-- container_wrap end -->

      <?include "../inc/footer.php"?>
    </div><!-- wrap end -->
  </body>
</html>
