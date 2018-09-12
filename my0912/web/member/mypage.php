<!DOCTYPE html>
<html lang="ko">
<?include "../inc/head.php"?>
  <body>
    <div class="wrap">
      <?include "../inc/header.php"?>
      <div class="container_wrap">
        <div class="container_inner">
          <div class="content">

<div class="mypage_00">

	<div class="tit">
		<?=$symbolic?> 회원정보
		&nbsp;&nbsp;&nbsp;<input type="button" value="회원정보수정" class="comm_btn_more" onclick="location.href='./edit.php'" />
		&nbsp;&nbsp;&nbsp;<input type="button" value="회원탈퇴" class="comm_btn_more" onclick="location.href='./exit.php'" />
	</div>

	<table border="0" cellspacing="0" cellpadding="0" class="table_a wall">
	<colgroup>
	<col width="100" />
	<col />
	</colgroup>
	<tbody>
	<tr>
		<th class="lp10">아이디</th>
		<td class="lp10"><?//=$row[id]?>gaons</td>
	</tr>
	<tr>
		<th class="lp10">이름</th>
		<td class="lp10"><?//=$row[name]?>가온스</td>
	</tr>
	<tr>
		<th class="lp10">전화번호</th>
		<td class="lp10"><?//=$row[tel]?>02-1234-5678</td>
	</tr>
	<tr>
		<th class="lp10">휴대폰</th>
		<td class="lp10"><?//=$row[hp]?>010-1234-5678</td>
	</tr>
	<tr>
		<th class="lp10">이메일</th>
		<td class="lp10"><?//=$row[email]?>gaons@gaons.com</td>
	</tr>
	<tr>
		<th class="lp10">주소</th>
		<td class="lp10"><?//=$row[adr1]?><?//=$row[adr2]?>서울시 영등포구 당산동 523-65&nbsp;(우) 12345<?//=$row[zip]?></td>
	</tr>
	</tbody>
	</table>

</div>

          </div><!-- content end -->
        </div><!-- container_inner end -->
      </div><!-- container_wrap end -->

      <?include "../inc/footer.php"?>
    </div><!-- wrap end -->
  </body>
</html>
