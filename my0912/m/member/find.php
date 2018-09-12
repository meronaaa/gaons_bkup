<!DOCTYPE html>
<html lang="ko">
<?include "../inc/head.php"?>
  <body>
    <div class="wrap">
      <?include "../inc/header.php"?>
      <div class="container_wrap">
        <div class="container_inner">
          <div class="content">

<div class="find_00">

		<div class="h20"></div>

		<div class="tit"><?=$symbolic?> 아이디찾기</div>

		<form name="frm_id" action="./find.act.php" method="post" enctype="multipart/form-data" autocomplete="off" onSubmit="return chkForm(this);">
		<input type="hidden" name="act" value="find_id">
		<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table_a">
		<tr>
			<th class="w100 lp10">이름</td>
			<td class="w100 lp10"><input type="text" name="name" class="lbox w80" tabindex="1" exp="이름을" /></td>
			<td rowspan="3" class="lp10"><input type="submit" value="아이디찾기" class="comm_btn_find" /></td>
		</tr>
		<tr>
			<th class="w100 lp10">이메일</td>
			<td class="w100 lp10"><input type="text" name="email" class="lbox w80" tabindex="2" exp="이메일을" /></td>
		</tr>
		</table>
		</form>

		<div class="h20"></div>

		<div class="tit"><?=$symbolic?> 비밀번호찾기</div>

		<form name="frm_pwd" action="./find.act.php" method="post" enctype="multipart/form-data" autocomplete="off" onSubmit="return chkForm(this);">
		<input type="hidden" name="act" value="find_pwd">
		<table width="100%" border="0" cellpadding="0" cellspacing="0" class="table_a">
		<tr>
			<th class="w100 lp10">이름</td>
			<td class="w100 lp10"><input type="text" name="name" class="lbox w80" tabindex="4" exp="이름을" /></td>
			<td rowspan="3" class="lp10"><input type="submit" value="비밀번호찾기" class="comm_btn_find" /></td>
		</tr>
		<tr>
			<th class="w100 lp10">이메일</td>
			<td class="w100 lp10"><input type="text" name="email" class="lbox w80" tabindex="5" exp="이메일을" /></td>
		</tr>
		<tr>
			<th class="w100 lp10">아이디</td>
			<td class="w100 lp10"><input type="text" name="id" class="lbox w80"  tabindex="6" exp="아이디를" /></td>
		</tr>
		</table>
		</form>

		<div class="h20"></div>

</div>

          </div><!-- content end -->
        </div><!-- container_inner end -->
      </div><!-- container_wrap end -->

      <?include "../inc/footer.php"?>
    </div><!-- wrap end -->
  </body>
</html>
