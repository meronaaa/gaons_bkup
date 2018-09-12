<!DOCTYPE html>
<html lang="ko">
<?include "../inc/head.php"?>
  <body>
    <div class="wrap">
      <?include "../inc/header.php"?>
      <div class="container_wrap">
        <div class="container_inner">
          <div class="content">

<div class="board_write_00">

<table border="0" cellspacing="0" cellpadding="0" class="table_a wall">
<colgroup>
	<col width="100" />
	<col />
</colgroup>
<tr>
	<th class="lp10">제 목</th>
	<td class="lp10"><input type="text" name="title" class="w200 lbox" value="<?=stripslashes($wData[data][re_title])?>" exp="제목을"/></td>
</tr>
<tr>
	<th class="lp10">작성자</th>
	<td class="lp10"><input type="text" name="name" class="w100 lbox" value="<?=$_SESSION[SE_USRNM]?>" exp="작성자를"/></td>
</tr>
<tr>
	<th class="lp10">비밀번호</th>
	<td class="lp10"><input type="password" name="pwd" class="w100 lbox" maxlength="12" value="<?=($wData[data][bLock]) ? $wData[data][pwd] : '';?>" exp="비밀번호를" /></td>
</tr>
<tr>
	<td class="pd10" colspan="2">
		<textarea name="content" class="tbox" cols="30" rows="10"></textarea>
	</td>
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
