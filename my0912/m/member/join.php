<!DOCTYPE html>
<html lang="ko">
<?include "../inc/head.php"?>
  <body>
    <div class="wrap">
      <?include "../inc/header.php"?>
      <div class="container_wrap">
        <div class="container_inner">
          <div class="content">

<script type="text/javascript">
function checkId()
{
	var f = document.fm;
	var patten = /^[a-zA-Z0-9]{1}[a-zA-Z0-9_-]{3,19}$/;
	
	if(!f.id.value)
	{
		alert("아이디를 입력해 주세요.");
		f.id.focus();
		return;
	}
	else if(!patten.test(f.id.value))
	{
		alert("아이디는 4~20자 까지 영문,숫자만 입력가능합니다.");
		f.id.value = "";
		f.id.focus();
		return;
	}
	else
		document.hiddenFrame.location.href = "./check.id.php?id="+f.id.value;
}
</script>
<div class="join_00">

	<form name="fm" method="post" action="./join.act.php" enctype="multipart/form-data" autocomplete="off" onSubmit="return chkForm(this);">
	<input type="hidden" name="act" />

	<div class="tit"><?=$symbolic?> 회원정보입력 ( <?=$compulsory?> 표시는 필수입력사항입니다. )</div>

	<table border="0" cellspacing="0" cellpadding="0" class="table_a wall">
	<colgroup>
	<col width="100" />
	<col />
	</colgroup>
	<tbody>
	<tr>
		<th class="lp10"><?=$compulsory?> 아이디</th>
		<td class="lp10 pd10">
			<input type="text" name="id" id="id" maxlength="20" class=" lbox w100 bold" style="ime-mode:disabled;" exp="아이디를" tabindex="1" />
			<input type="hidden" name="chkid" id="chkid" exp="아이디 중복체크를 클릭해 주세요." />
			<input type="button" value="중복확인" class="comm_btn_chkid" onclick="javascript:checkId();" />
			<br /><span class="msg">※ 아이디는 4~20자 까지 영문,숫자만 입력가능합니다.</span>
		</td>
	</tr>
	<tr>
		<th class="lp10"><?=$compulsory?> 비밀번호</th>
		<td class="lp10 pd10">
			<input type="password" name="pwd" id="pwd" class="lbox w200" exp="비밀번호를" chktype="passchk" tabindex="2" />
			<br /><span class="msg">※ 비밀번호는 하나의 대문자, 하나의 특수 문자 및 영숫자를 포함하여 8자이상이어야 합니다.</span>
		</td>
	</tr>
	<tr>
		<th class="lp10"><?=$compulsory?> 비번확인</th>
		<td class="lp10 pd10">
			<input type="password" name="pwd2" class="lbox w200" exp="비밀번호를 한번 더" chktype="password" tabindex="3" />
			<br /><span class="msg">※ 확인을 위해 다시 한번 입력해주십시오.</span>
		</td>
	</tr>
	<tr>
		<th class="lp10"><?=$compulsory?> 이름</th>
		<td class="lp10"><input type="text" name="name" class="lbox w100" exp="이름을" tabindex="4" /></td>
	</tr>
	<tr>
		<th class="lp10"><?=$compulsory?> 이메일</th>
		<td class="lp10 pd10">
			<input type="text" name="email" class="lbox w200" exp="이메일을" chktype="email" tabindex="5" />
			<br /><span class="msg">※ 이메일에는 반드시 수신가능한 이메일 주소를 입력해 주십시오. <br />나중에 비밀번호 찾기에 사용됩니다.</span>
		</td>
	</tr>
	<tr>
		<th class="lp10"><?=$compulsory?> 주소</th>
		<td class="pd10 pd10">
			<input type="text" name="zip" class="lbox w100" readonly exp="우편번호를" />
			<input type="button" value="우편번호찾기" class="comm_btn_zipcode" onClick="javascript:zipcodeWin1('fm', 'zip', 'adr1', 'adr2');" /><br /><br />

			<input type="text" name="adr1" class="lbox w200" readonly /><br /><br />
			<input type="text" name="adr2" class="lbox w200" exp="상세주소를" />
		</td>
	</tr>
	<tr>
		<th class="lp10"><?=$compulsory?> 휴대전화</th>
		<td class="lp10">
			<input type="tel" name="hp1" class="lbox w50" maxlength="3" exp="휴대전화를" chktype="number" /> - 
			<input type="tel" name="hp2" class="lbox w50" maxlength="4" exp="휴대전화를" chktype="number" /> - 
			<input type="tel" name="hp3" class="lbox w50" maxlength="4" exp="휴대전화를" chktype="number" />
		</td>
	</tr>
	<tr>
		<th class="lp10">일반전화</th>
		<td class="lp10">
			<input type="tel" name="tel1" class="lbox w50" maxlength="4" /> - 
			<input type="tel" name="tel2" class="lbox w50" maxlength="4" /> - 
			<input type="tel" name="tel3" class="lbox w50" maxlength="4" />
		</td>
	</tr>
	</tbody>
	</table>

	<div class="h20"></div>

	<div class="ac">
		<input type="submit" value="가입" class="join_btn_ok" />
		<input type="button" value="취소" class="join_btn_cancel" onclick="javascript:location.href='<?=$rtnm?>';" />
	</div>

	</form>

</div>

          </div><!-- content end -->
        </div><!-- container_inner end -->
      </div><!-- container_wrap end -->

      <?include "../inc/footer.php"?>
    </div><!-- wrap end -->
  </body>
</html>
