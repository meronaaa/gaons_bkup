<!DOCTYPE html>
<html lang="ko">
<?include "../inc/head.php"?>
  <body>
    <div class="wrap">
      <?include "../inc/header.php"?>
      <div class="container_wrap">
        <div class="container_inner">
          <div class="content">

<div class="exit_00">

	<div class="tbp10 al">
		- 불편한점이 있으셨다면 고객지원센터에 연락주시기 바랍니다.<br>
		- 보다 빠르게 고객님을 위해 최선을 다하겠습니다.<br>
		- 한번 탈퇴한 회원께서는 다시 같은 아이디나 이메일로 회원가입을 하실수 없으니 신중히 결정해주시기 바랍니다.
	</div>

	<form name="frm" action="./join.act.php" method="post" autocomplete="off" onSubmit="return chkForm(this);">
	<input type="hidden" name="act" value="exit">

	<div class="tbp10 lp10"><?=$symbolic?> 회원탈퇴 ( <?=$compulsory?> 표시는 필수입력사항입니다. )</div>

	<table border="0" cellpadding="0" cellspacing="0" class="table_a wall">
	<colgroup>
	<col width="15%" />
	<col />
	</colgroup>
	<tbody>
	<tr>
		<th class="lp10">아이디</th>
		<td class="pd10"><?//=$row[id]?>gaons</td>
	</tr>
	<tr>
		<th class="lp10">이름</th>
		<td class="pd10"><?//=$row[name]?>가온스</td>
	</tr>
	<tr>
		<th class="lp10">탈퇴사유</th>
		<td class="pd10"><textarea wrap="physical" cols="70" style='width:99%;' rows="20" name="exitmemo" class="tbox2" exp="탈퇴사유를"></textarea></td>
	</tr>
	</table>

	<div class="h20"></div>


	<div class="btn ac">
		<input type="submit" value="탈퇴" class="hand exit_btn_ok" />
		<input type="button" value="취소" class="hand exit_btn_cancel" onclick="javascript:location.href='<?=$rtnm?>';" />
	</div>

	<div class="h20"></div>

	</form>

</div>

          </div><!-- content end -->
        </div><!-- container_inner end -->
      </div><!-- container_wrap end -->

      <?include "../inc/footer.php"?>
    </div><!-- wrap end -->
  </body>
</html>
