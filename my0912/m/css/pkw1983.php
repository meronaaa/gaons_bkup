<?php header("Content-type:text/css; charset:UTF-8");?>
<?
	$rtnm = "/m";
?>
@import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

/**basic**/
html{margin:0px;padding:0px;}
body{margin:0px;padding:0px;font-family:'Nanum Gothic','굴림', Gulim, AppleSDGothicNeo, "Apple SD 산돌고딕 Neo", Helvetica, Verdana, Arial, sans-serif;font-size:12px;color:#737373;}
form{margin:0px;margin:0px;}
table{margin:0px;padding:0px;}
img {border:0px; padding:0px; margin:0px;}
ul,ol,li,dd,dt,dl {padding:0px; margin:0px;}
a{text-decoration:none;color:#737373;}
a:link{text-decoration:none;color:#737373;}
a:visited{text-decoration:none;color:#737373;}
a:active{text-decoration:none;color:#737373;}
a:hover{text-decoration:none;color:#ff0000;}

#wrap{width:100%;}
#header{width:99%;height:80px;margin:0 auto;border:1px solid #111;}
#top_00{text-align:left;}
#top_01{text-align:right;}
#container{width:99%;height:100%;margin:0 auto;border:1px solid #111;}
#content{width:99%;margin:0 auto;}
#footer{width:99%;height:100%;margin:0 auto;border:1px solid #111;}
#bottom{width:99%;text-align:left;clear:both;}

.msg{color:#ff0000;}
.hand{cursor:pointer;}
.bold{font-weight:bold;}
.tit{text-align:left;padding-top:10px;padding-bottom:10px;font-size:15px;font-weight:bold;}
.imgbd{border:1px solid #808080;}

/**font**/
.fs11 {font-size:11px !important; }
.fs12 {font-size:12px !important; }
.fs13 {font-size:13px !important; }
.fs14 {font-size:14px !important; }
.fs15 {font-size:15px !important; }
.fs16 {font-size:16px !important; }
.fs17 {font-size:17px !important; }
.fs18 {font-size:18px !important; }
.fs19 {font-size:19px !important; }
.fs20 {font-size:20px !important; }
.fs21 {font-size:21px !important; }
.fs22 {font-size:22px !important; }
.fs23 {font-size:23px !important; }
.fs24 {font-size:24px !important; }
.fs25 {font-size:25px !important; }
.fs26 {font-size:26px !important; }

/**width**/
.w10{width:10px;}
.w20{width:20px;}
.w30{width:30px;}
.w40{width:40px;}
.w50{width:50px;}
.w60{width:60px;}
.w70{width:70px;}
.w80{width:80px;}
.w90{width:90px;}
.w100{width:100px;}
.w110{width:110px;}
.w120{width:120px;}
.w130{width:130px;}
.w140{width:140px;}
.w150{width:150px;}
.w160{width:160px;}
.w170{width:170px;}
.w180{width:180px;}
.w190{width:190px;}
.w200{width:200px;}
.w250{width:250px;}
.w300{width:300px;}
.w400{width:400px;}
.w500{width:500px;}
.w600{width:600px;}
.w700{width:700px;}
.w800{width:800px;}
.w900{width:900px;}
.w1000{width:1000px;}
.w1200{width:1200px;}
.w1400{width:1400px;}
.wp90{width:90%;}
.wp95{width:95%;}
.wp98{width:98%;}
.wp100{width:100%;}
.wall{width:100%;}

/**height**/
.h10{height:10px;}
.h12{height:12px;}
.h20{height:20px;}
.h30{height:30px;}
.h50{height:50px;}
.h100{height:100px;}
.h200{height:200px;}
.hall{height:100%;}

/**align**/
.al{text-align:left;}
.ac{text-align:center;}
.ar{text-align:right;}
.mc{margin:0px auto;}
.vm{vertical-align:middle;}
.vt{vertical-align:top;}
.vb{vertical-align:bottom;}

/**padding**/
.lp5{text-align:left;padding-left:5px;}
.lp10{text-align:left;padding-left:10px;}
.lp20{text-align:left;padding-left:20px;}
.rp5{text-align:right;padding-right:5px;}
.rp10{text-align:right;padding-right:10px;}
.tp5{padding-top:5px;}
.tp10{padding-top:10px;}
.bp5{padding-bottom:5px;}
.bp10{padding-bottom:10px;}
.tbp5{padding-top:5px;padding-bottom:5px;}
.tbp10{padding-top:10px;padding-bottom:10px;}
.tbp20{padding-top:20px;padding-bottom:20px;}
.tbpt{padding-top:0px;padding-bottom:0px;}
.tbpb{padding-top:30px;padding-bottom:30px;}
.pd5{padding:5px;}
.pd10{padding:10px;}
.pd20{padding:20px;}

/**border**/
.bd0{border:0px;}
.bd1{border:1px;}
.bd5{border:5px;}

/**btn**/
.comm_btn_ok, .article_btn_ok, .join_btn_ok, .edit_btn_ok, .exit_btn_ok, .comm_btn_boardW, .comm_btn_boardO, .comm_btn_boardD, .goods_view_btn_cart, .goods_cart_btn_alldel, .goods_order_btn_pay, .order_view_btn_list{
	display:inline-block;
	*display:inline;
	*zoom:1;
	vertical-align:middle;
	text-align:center;
	width:100px;
	font-size:14px;
	font-weight:600;
	color:#fff;
	background:#333;
	padding:15px 0;
	border:none;
	cursor:pointer;
	border-radius:15px;
}

.comm_btn_cancel, .article_btn_cancel, .join_btn_cancel, .edit_btn_cancel, .exit_btn_cancel, .comm_btn_boardL, .comm_btn_boardE, .comm_btn_boardCM, .goods_view_btn_buy, .goods_view_btn_wish, .goods_cart_btn_home, .goods_cart_btn_order, .goods_order_btn_home, .order_view_btn_home{
	display:inline-block;
	*display:inline;
	*zoom:1;
	vertical-align:middle;
	text-align:center;
	width:100px;
	font-size:14px;
	font-weight:600;
	color:#333;
	background:#fff;
	padding:14px 0;
	border:1px solid #ddd;
	cursor:pointer;
	border-radius:15px;
}

.comm_btn_chkid, .comm_btn_zipcode, .comm_btn_more, .comm_btn_boardX, .goods_cart_btn_login, .comm_btn_find{
	display:inline-block;
	*display:inline;
	*zoom:1;
	vertical-align:middle;
	text-align:center;
	width:100px;
	height:35px;
	font-size:12px;
	font-weight:600;
	color:#333;
	background:#fff;
	padding:4px 0;
	border:1px solid #ddd;
	cursor:pointer;
	border-radius:15px;
}

.goods_cart_btn_del, .comm_btn_boardS, .comm_btn_search {
	display:inline-block;
	*display:inline;
	*zoom:1;
	vertical-align:middle;
	text-align:center;
	width:50px;
	height:35px;
	font-size:12px;
	font-weight:600;
	color:#333;
	background:#fff;
	padding:4px 0;
	border:1px solid #ddd;
	cursor:pointer;
	border-radius:15px;
}

/** Input Box Style **/
.lbox{font-size:16px; border:1px solid #ccc; height:35px; background-color:#fff; color:#737373;}
.sbox{font-size:16px; border:1px solid #ccc; height:35px; background-color:#fff; color:#737373;}
.tbox{font-size:16px; border:1px solid #ccc; background-color:#fff; color:#737373;}
.vbox{font-size:16px; border:0px solid #ccc; height:35px; background-color:#fff; color:#737373;}
.fbox{font-size:16px; border:1px solid #ccc; height:35px; background-color:#fff; color:#737373;}

/**etc**/
.pageU{width:100%;height:15px;background-color:#f6f6f6;border-top:1px solid #e2e2e2; border-bottom:1px solid #e2e2e2; text-align:center; padding:5px 0 5px 0;margin:10px 0 10px 0;font-size:12px;color:#737373;}

/*
.pageU {
	width:100%;
	margin:0 auto;
	border:0px solid red;
}
.p_number {
	text-align:center;
	color:#666;
	font-size:12px;
	padding-top:33px;
}
.p_number a.number {
	vertical-align:top;
	display:inline-block;
	line-height:16px;
	padding:2px 7px 2px 7px;
	border:1px solid #ddd;
	color:#626060;
	text-decoration: none;
	letter-spacing:-1px;
	margin-right:6px;
}
.p_number strong {
	vertical-align:top;
	padding:2px 7px 2px 7px;
	color:#fff;
	display:inline-block;
	border:1px solid #5d5d5d;
	line-height:16px;
	background:#5d5d5d;
	font-weight:bold;
	margin-right:6px;
}
*/

ul, ol, li {
	list-style: none;
}

/**table**/
table.table_a{border-top:3px solid #5d5d5d;border-spacing:0px;border-collapse:collapse;}
table.table_a th{font-size:16px;border:1px solid #dddddd;height:60px;background:#f4f4f4;color:#565656;vertical-align:middle;}
table.table_a td{font-size:16px;border:1px solid #dddddd;height:60px;color:#787878;vertical-align:middle;}
table.table_a caption{text-align:left;padding-left:10px;}

/**layout**/
.design_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.article_00{width:320px;margin:0px auto;padding-top:10px;padding-top:20px;padding-bottom:20px;}
.article_01{height:180px;overflow:auto;border:1px solid #d9d9d9;background-color:#ffffff;}
.article_02{height:180px;overflow:auto;border:1px solid #d9d9d9;background-color:#ffffff;}

.join_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.login_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.find_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.exit_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.exit_01{text-align:right;}
.exit_02{padding:10px 0px 10px 0px;text-align:left;}
.exit_03{padding:10px 0px 10px 0px;}
.exit_04{padding:10px 0px 10px 0px;text-align:center;}

.exit_a{width:320px;margin:0px auto;border-top:3px solid #81B921;border-spacing:1px;}
.exit_a caption{padding:5px 0px 5px 5px;text-align:left;}
.exit_a th{border:1px solid #dddddd;height:30px;background-color:#f9f9f9;}
.exit_a th.left_05{text-align:left;padding-left:5px;}
.exit_a th.left_10{text-align:left;padding-left:10px;}
.exit_a td{border:1px solid #dddddd;height:30px;background-color:#ffffff;}
.exit_a td.left_05{text-align:left;padding-left:5px;}
.exit_a td.left_10{text-align:left;padding-left:10px;}

.mypage_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.board_list_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.board_write_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.board_view_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.board_edit_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.board_comment_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.board_relate_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.goodslist_00{width:100%;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.goodsview_00{width:100%;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.goodscart_00{width:100%;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.goodswish_00{width:100%;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.goodsorder_00{width:100%;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.orderlist_00{width:100%;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.orderview_00{width:100%;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.review_list_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.review_write_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.review_view_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.review_edit_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.review_comment_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

.qna_list_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.qna_write_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.qna_view_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.qna_edit_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}
.qna_comment_00{width:320px;margin:0px auto;padding-top:20px;padding-bottom:20px;}

/** PassWord Layer **/
.PassLayer{width:300px;margin:0px;padding:0px;border:solid 0px red;}
.PassLayer td.bg_top{height:28px;background:url(/img/layer/ly_bg_t.gif) repeat-x;}
.PassLayer td.bg_left{width:30px;background:url(/img/layer/ly_bg_l.gif) repeat-y;}
.PassLayer td.bg_right{width:30px;background:url(/img/layer/ly_bg_r.gif) repeat-y;}
.PassLayer td.bg_btm{height:28px;background:url(/img/layer/ly_bg_b.gif) repeat-x;}
.PassLayer td input.lbox{height:17px;border:1px solid #ccc;color:#666;font-size:11px;}
.PassLayer h2{margin-bottom:15px;}
.PassLayer dl{margin-top:3px;width:200px;height:35px;float:left;}
.PassLayer dl dt{float:left;width:65px;margin-top:5px;}
.PassLayer div.line{background:#fff;height:15px;width:253px;border-bottom:1px solid #d9d9d9;margin-bottom:5px;}

/** banner Style **/
#aside {width:1100px; margin:0 auto; position:relative; z-index:100;border:solid 0px red;}
#aside .right {position:absolute; right:-20px; top:50px;}
#aside .right .bn {border:1px solid #ccc;}
#aside .right .top {cursor:pointer;}

/** 여기부터는 디자인팀에서 작업해준 일부 프로그램으로는 구현이 어려운 페이지입니다 **/

/* 로그인 */
.mdl-login .mdl-h{
	text-align:center;
	width:100%;
}

.mdl-login .mdl-h>*{
	display:inline-block;
	*display:inline;
	*zoom:1;
	vertical-align:middle;
}

.mdl-login .mdl-h>strong{
	margin-right:10px;
	font-family:'Segoe UI',Segoe UI;
	font-size:62px;
	color:#81B921;
	text-transform:uppercase;
	font-weight:bold;
	line-height:100%;
	*padding-bottom:8px;
}

.mdl-login .mdl-h>span{
	margin-top:15px;
	color:#555;
	font-size:15px;
	line-height:22px;
	text-align:left;
}

.mdl-login .mdl-input{
	padding:45px 0;
	text-align:center;
	background:#fbfbfb;
	border-top:2px solid #666;
}

.mdl-login .mdl-input form{width:100%;}

.left_input{width:70%;}
.left_input>dl{width:100%;}
.left_input>dl:after{content:""; display:block; clear:both;}
.left_input>dl>dt{float:left; width:27%; color:#555; font-weight:600; font-size:14px; text-align:left; padding:7px 3% 0 0;}
.left_input>dl>dd{float:left; width:70%;}
.left_input>dl>dd>input{width:100%; border:1px solid #ddd; box-sizing:border-box; -moz-box-sizing:border-box; -webkit-box-sizing:border-box; padding:5px 0;}
.right_input{width:22%; margin:0 0 0 3%;}

.mdl-login .mdl-input>form>*{
	display:inline-block;
	*display:inline;
	*zoom:1;
	vertical-align:middle;
}

.mdl-login .mdl-input dl{
	position:relative;
	margin-top:5px;
}

.mdl-login .mdl-input dl:first-child,
.mdl-login .mdl-menu dl:first-child{
	margin-top:0;
}

.mdl-login .mdl-submit{
	width:100%;
	text-align:center;
	background:#81B921;
	color:#fff;
	font-size:14px;
	font-weight:600;
	border:none;
}

.mdl-login .mdl-menu{
	padding:35px 0;
	border-top:1px solid #ddd;
	border-bottom:1px solid #ddd;
	width:100%;
}

.mdl-login .mdl-list{
	width:100%;
	margin:0 auto;
}

.mdl-login .mdl-menu dl{
	width:100%;
}

.mdl-login .mdl-menu dl:after{content:""; display:block; clear:both;}

.mdl-login .mdl-menu dt{
	float:left;
	width:43%;
	text-align:center;
	border:1px solid #8f8f8f;
	background:#999;
	font-size:13px;
	padding:8px 0;
}

.mdl-login .mdl-menu dt a{
	display:block;
	padding-left:14px;
	text-align:left;
	color:#fff;
	background:url(<?=$rtnm?>/img/design/bg_bul.png) 90% 50% no-repeat;
}

.mdl-login .mdl-menu dd{
	float:left;
	width:51%;
	background:url(<?=$rtnm?>/img/design/bg_dot.png) 0 50% no-repeat;
	color:#666;
	padding:8px 0 8px 2%;
	margin:0 0 10px 3%;
	font-size:87.5%;
	vertical-align:middle;
}

.mdl-login .mdl-menu.mdl-menu2 dd{padding-top:0px;}

.mdl-login .mdl-submit{
	padding:23px 0 23px;
	*padding:19px 0;
}

/* 계정 찾기 */
.mdl-find div.mdl-h{
	margin-bottom:0;
}

.mdl-find .mdl-section{
	height:383px;
	overflow:hidden;
	border-bottom:1px solid #eee;
}

.mdl-find .mdl-tit>*{
	display:inline-block;
	*display:inline;
	*zoom:1;
	vertical-align:top;
}

.mdl-find .mdl-tit>i{
	width:60px;
	height:60px;
	margin-right:15px;
	background:url(<?=$rtnm?>/img/design/obj_find.png) no-repeat;
}

.mdl-find .mdl-pw .mdl-tit>i{
	background-position:-60px 0;
}

.mdl-find .mdl-tit>strong{
	margin-top:5px;
	color:#333;
	font-size:30px;
	line-height:100%;
}

.mdl-find .mdl-tit>strong>span{
	display:block;
	margin-top:5px;
	font-size:13px;
	color:#999;
	line-height:18px;
	font-weight:normal;
}

.mdl-mbs .mdl-half{
	width:340px;
	padding:50px 0 0 40px;
	float:left;
}

.mdl-mbs .mdl-half:first-child{
	width:339px;
	border-right:1px solid #eee;
	padding-left:0;
	padding-right:40px;
}

.mdl-mbs.mdl-find .mdl-half:first-child{
	height:370px;
}

.mdl-find .mdl-input{
	margin:25px 0 50px;
	text-align:right;
}

.mdl-find .mdl-input dl{
	position:relative;
	padding-left:75px;
	margin-top:5px;
	text-align:left;
}

.mdl-find .mdl-input dl:first-child{
	margin-top:0;
}

.mdl-find .mdl-input dt{
	position:absolute;
	top:50%;
	left:13px;
	margin-top:-7px;
}

.mdl-find dt label{
	color:#555;
	font-weight:600;
	font-size:14px;
}

.mdl-find .mdl-input dd input{
	padding:5px;
	width:95%;
	border:1px solid #ddd;
}

.mdl-find .mdl-submit{
	display:inline-block;
	*display:inline;
	*zoom:1;
	margin-top:50px;
	padding:14px 0;
	width:173px;
	background:#81B921;
	color:#fff;
	font-size:14px;
	font-weight:600;
	text-align:center;
	border:none;
	letter-spacing:1px;
}