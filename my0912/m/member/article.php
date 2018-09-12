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
function articleCheckForm()
{
	if(!document.all.article_01.checked)
	{
		alert("이용약관에 동의해 주세요.");
		document.all.article_01.focus();
	}
	else if(!document.all.article_02.checked)
	{
		alert("개인정보취급방침에 동의해 주세요.");
		document.all.article_02.focus();
	}
	else 
		location.href="./join.php";
}
</script>
<div class="article_00">

	<div class="tit"><?=$symbolic?> 이용약관</div>

	<div class="article_01"><?//=stripslashes($config[agreement])?>이용약관내용입니다</div>

	<div class="tbp10 ar"><input type="checkbox" name="article_01" class="vm" id="article_01" /> <label for="article_01" class="hand">이용약관에 동의합니다. (필수)</label></div>

	<div class="tit"><?=$symbolic?> 개인정보취급방침</div>

	<div class="article_02"><?//=stripslashes($config[privacy])?>개인정보취급방침내용입니다</div>

	<div class="tbp10 ar"><input type="checkbox" name="article_02" class="vm" id="article_02" /> <label for="article_02" class="hand">개인정보취급방침에 동의합니다. (필수)</label></div>

	<div class="h20"></div>

	<div class="ac">
		<input type="button" value="동의" class="article_btn_ok" onclick="javascript:articleCheckForm();" />
		<input type="button" value="취소" class="article_btn_cancel" onclick="javascript:location.href='<?=$rtnm?>';" />
	</div>

</div>

          </div><!-- content end -->
        </div><!-- container_inner end -->
      </div><!-- container_wrap end -->

      <?include "../inc/footer.php"?>
    </div><!-- wrap end -->
  </body>
</html>
