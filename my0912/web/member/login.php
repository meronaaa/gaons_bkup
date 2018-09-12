<!DOCTYPE html>
<html lang="ko">
<?include "../inc/head.php"?>
  <body>
    <div class="wrap">
      <?include "../inc/header.php"?>
      <div class="container_wrap">
        <div class="container_inner">
          <div class="content">

<div class="mdl-login login_00">

	<div class="mdl-h">

	</div>
	<div class="mdl-input">
		<form name="fm" action="./login.act.php" method="post" onSubmit="return chkForm(this);" enctype="multipart/form-data" autocomplete="off">
			<div>
				<dl>
					<!-- <dt><label for="id">아이디</label></dt> -->
					<dd><input type="text" name="id" id="id" value="<?=$id?>" exp="아이디를" tabindex="1" placeholder="아이디"/></dd>
				</dl>
				<dl>
					<!-- <dt><label for="pwd">비밀번호</label> </dt> -->
					<dd><input type="password" name="pwd" id="pwd" exp="비밀번호를" tabindex="2"  placeholder="비밀번호"/></dd>
					<!--<br /><input type="checkbox" name="atuologin" class="vm" /> 자동로그인-->
				</dl>
			</div>
			<input type="submit" class="mdl-submit hand" value="LOGIN" />
		</form>
	</div>
	<div class="mdl-menu">
		<div class="mdl-list">
			<dl>
				<dt><a href="./find.php">아이디/비밀번호 찾기</a></dt>
				<!-- <dd>아이디/비밀번호를 잊으신 분은 클릭해주세요</dd> -->
			</dl>
			<dl>
				<dt><a href="./article.php">회원가입하기</a></dt>
				<!-- <dd>아이디가 없으신 분은 회원가입을 해주세요.</dd> -->
			</dl>
			<dl>
				<!-- <dt><a href="<?=$rtnm?>/goods/order.check.php">비회원 주문확인</a></dt> -->
				<!-- <dd>비회원으로 상품을 구매하셨으면 클릭해주세요.</dd> -->
			</dl>
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
