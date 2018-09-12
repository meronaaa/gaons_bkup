/***** Trim ****************************************************************************/
String.prototype.trim = function(){
	return this.replace(/(^\s*)|(\s*$)/g, "");
}

/***** 공백제거 ************************************************************************/
String.prototype.stripspace = function() {
	return this.replace(/ /g, "");
}

/***** 파일확장자 구하기 ***************************************************************/
String.prototype.getExt = function() {
	var ext = this.substring(this.lastIndexOf(".") + 1, this.length);
	return ext;
}

/***** getElementById() ****************************************************************/
function _ID(obj){return document.getElementById(obj)}

/***** Set Cookie **********************************************************************/
function setCookie(name, value, expiredays)
{
	var todayDate = new Date();
	
	//todayDate.setTime(todayDate.getTime() + (1000*30*24*60*60));
	todayDate.setDate(todayDate.getDate() + expiredays);

	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}

/***** 관리자레프트 메뉴열고닫히는 부분 *****************************************************/
function LeftONOFF()
{
	if(_ID('LeftMenuOn').style.display == "block")
	{
		_ID('LeftMenuOn').style.display = "none";
		_ID('LeftMenuOff').style.display = "block";
		_ID('off_btn').style.display = "block";
		document.getElementById('LeftFooter').src = "../img/left/left_footer_off.gif";

		setCookie("CK_LEFT", "off", 1);
	}
	else
	{
		_ID('LeftMenuOn').style.display = "block";
		_ID('LeftMenuOff').style.display = "none";
		_ID('off_btn').style.display = "none";
		document.getElementById('LeftFooter').src = "../img/left/left_footer_on.gif";

		setCookie("CK_LEFT", "on", 1);
	}
}

/***** 폼체크 **********************************************************************/
function chkForm(form)
{
	var len = form.elements.length;
	var typenm, tagnm, expstr, ename, e_val, r_ck;

	for(var i=0; i < len; i++)
	{
		var obj = form.elements[i];
		ename = obj.name;//인풋이름
		typenm = obj.type.toUpperCase();//인풋타입
		tagnm = obj.tagName.toUpperCase();//태그이름
		expstr = obj.getAttribute("exp");//입력한 exp
		e_val = obj.value;//인풋값

		if(expstr != null && expstr != "")
		{
			if(typenm == "SELECT-ONE")	//select
			{
				if(e_val == "")
				{
					alert(expstr + " 선택해 주세요.");
					form.elements[i].focus();
					return false;
					break;
				}
			}
			else if(typenm == "RADIO")	//radio
			{
				r_ck = "N";
				for(var j=0; j < eval("form."+ename).length; j++)
				{
					if(eval("form."+ename)[j].checked == true)
					{
						r_ck = "Y";
						break;
					}
				}

				if(r_ck == "N")
				{
					alert(expstr + " 선택해 주세요.");
					eval("form."+ename)[0].focus();
					return false;
					break;
				}
			}
			else if(typenm == "TEXT" || typenm == "PASSWORD" || typenm == "TEXTAREA" || typenm == "TEL")
			{
				if(e_val.replace(/^\s*/,'').replace(/\s*$/, '') == "")
				{
					alert(expstr + " 입력해 주세요.");
					form.elements[i].focus();
					return false;
					break;
				}
			}
			else if(typenm == "HIDDEN")
			{
				if(e_val.replace(/^\s*/,'').replace(/\s*$/, '') == "")
				{
					alert(expstr);
					return false;
					break;
				}
			}
			else if(typenm == "FILE")
			{
				if(e_val != "")
				{
					if(obj.getAttribute("filetype") != null)
					{
						var checkFile = obj.getAttribute("filetype");

						if(!chkFileType(form.elements[i], checkFile))
						{
							return false;
							break;
						}
					}
				}
				else
				{
					alert(expstr + " 선택해 주세요.");
					form.elements[i].focus();
					return false;
					break;
				}
			}
		}

		if(obj.getAttribute("chktype") != null && obj.value.length > 0)
		{
			var checkType = obj.getAttribute("chktype");

			if(checkType == "id")
			{
				if(!checkID(obj))
				{
					alert("아이디형식이 맞지 않습니다.");
					form.elements[i].value = "";
					form.elements[i].focus();
					return false;
					break;
				}
			}
			else if(checkType == "password")
			{
				if(form.pwd.value != form.pwd2.value)
				{
					alert("비밀번호가 맞지 않습니다.");
					form.pwd2.value = "";
					form.pwd2.focus();
					return false;
					break;
				}
			}
			else if(checkType == "email")
			{
				if(!checkEmail(e_val))
				{
					alert("메일주소형식이 맞지 않습니다.");
					form.elements[i].value = "";
					form.elements[i].focus();
					return false;
					break;
				}
			}
			else if(checkType == "ssn")
			{
				if(!checkSSN(form.ssn1.value, form.ssn2.value))
				{
					alert("주민번호 형식이 틀립니다.");
					form.ssn1.value = "";
					form.ssn2.value = "";
					form.ssn1.focus();
					return false;
					break;
				}
			}
			else if(checkType == "ssnone")
			{
				if(!checkSSN(obj.value.substr(0, 6), obj.value.substr(6, 7)))
				{
					alert("주민번호 형식이 틀립니다.");
					obj.value = "";
					obj.focus();
					return false;
					break;
				}
			}
			else if(checkType == "alphabet")
			{
				if(!isAlphabet(obj))
				{
					alert("영문 알파벳으로만 입력해 주세요.");
					obj.value = "";
					obj.focus();
					return false;
					break;
				}
			}
			else if(checkType == "passchk" && form.elements[i].value)
			{
				if(!checkPassword(form.elements[i]))
				{
					//alert("비밀번호는 공백없이 4자이상 12자이내의 영문, 숫자, _, - 만으로 입력해 주세요.");
					//form.elements[i].value = "";
					//form.elements[i].focus();
					return false;
					break;
				}

			}
			else if(checkType == "number")
			{
				if(!checkNumber(obj.value))
				{
					alert("숫자로만 입력해 주세요.");
					obj.value = "";
					obj.focus();
					return false;
					break;
				}
			}
		}
	}

	if(typeof(myeditor) == "object")
	{
		myeditor.outputBodyHTML();
	}

	if(typeof(myeditor1) == "object")
	{
		myeditor1.outputBodyHTML();
	}

	if(typeof(myeditor2) == "object")
	{
		myeditor2.outputBodyHTML();
	}

	if(typeof(myeditor3) == "object")
	{
		myeditor3.outputBodyHTML();
	}

	return true;
}

/***** 업로드 파일 체크 ***************************************************************/
function chkFileType(obj, type)
{
	var ext = obj.value.getExt().toLowerCase();
	//alert(obj.value.getExt());
	if(type == "image")
	{
		if(ext != "gif" && ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "bmp")
		{
			alert("이미지파일(gif, jpg, png, bmp)만 업로드 가능합니다.");
			obj.focus();
			return false;
		}
	}
	else if(type == "swf")
	{
		if(ext != "swf")
		{
			alert("플래쉬파일(swf)만 업로드 가능합니다.");
			obj.focus();
			return false;
		}
	}
	else if(type == "xml")
	{
		if(ext != "xml")
		{
			alert("xml 파일만 업로드 가능합니다.");
			obj.focus();
			return false;
		}
	}

	return true;
}

/***** 아이디체크 *****************************************************************/
function checkID(obj)
{
	var id = obj.value;
	var patten = /^[a-zA-Z0-9]{1}[a-zA-Z0-9_-]{3,19}$/;

	if(!patten.test(id))
		return false;
	else
		return true;
}

/***** 비밀번호체크 ***********************************************************/
function checkPass(obj)
{
	var str = obj.value;
	var patten = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

	if(!patten.test(str))
		return false;
	else
		return true;
}

function checkPassword(obj)
{
	var pw = obj.value;

	// ^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$
	if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(pw))
	{
		alert('비밀번호는 하나의 대문자, 하나의 특수 문자 및 영숫자를 포함하여 8자이상이어야 합니다.');
		obj.value = "";
		obj.focus();
		return false;
	}

	/*
	if(!/^[a-zA-Z0-9]{10,20}$/.test(pw) || pw.indexOf(' ') > -1) 
	{
		alert('비밀번호는 숫자와 영문자 조합으로 10~20자리를 사용해야 합니다.');
		obj.value = "";
		obj.focus();
		return false;
	}
	
	var chk_num = pw.search(/[0-9]/g);
	var chk_eng = pw.search(/[a-z]/ig);
	
	if(chk_num < 0 || chk_eng < 0)
	{
		alert('비밀번호는 숫자와 영문자를 혼용하여야 합니다.');
		obj.value = "";
		obj.focus();
		return false;
	}
	
	if(/(\w)\1\1\1/.test(pw))
	{
		alert('비밀번호에 같은 문자를 4번 이상 사용하실 수 없습니다.');
		obj.value = "";
		obj.focus();
		return false;
	}
	*/

	return true;
}

/***** 숫자형체크 *********************************************************************/
function checkNumber(nNumber)
{ 
    var anum=/(^\d+$)|(^\d+\.\d+$)/ ;

    if (anum.test(nNumber))
        return true; 
    else 
        return false; 
}

/***** 이메일체크 **********************************************************************/
function checkEmail(email)
{
	if(email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1)
		return true;
	else
		return false;
}

/***** 알파벳체크 ******************************************************************/
function isAlphabet(obj)
{ 
	var str = obj.value;

	if(str.length == 0) return false;
	str = str.toUpperCase();
	
	for(var i=0; i < str.length; i++)
		if(!('A' <= str.charAt(i) && str.charAt(i) <= 'Z')) return false;
	
	return true;
}

/***** 주민번호체크 ***********************************************************************/
function checkSSN(ssn1, ssn2)
{
	var ssn = ssn1 + ssn2;
	var patten = /^\d{6}[1234]\d{6}$/;
	var chk = 0;

	if(!patten.test(ssn)) return false;

	for(var i=0; i<=5; i++)
	{
		chk = chk + ((i % 8 + 2) * parseInt(ssn1.substring(i, i + 1)));
	}

	for(var i=6; i<=11; i++)
	{
		chk = chk + ((i % 8 + 2) * parseInt(ssn2.substring(i-6, i-5)));
	}

	chk = 11 - (chk % 11);
	chk = chk % 10;

	if (chk != ssn2.substring(6, 7))
		return false;
	else
		return true;
}

/***** 체크박스 전체체크 *********************************************************************/
function allCheck(field)
{
	var cbox = document.getElementsByName(field);

	for(var i=0; i < cbox.length; i++)
	{
		if(cbox[i].disabled == false)
			cbox[i].checked = (cbox[i].checked) ? false : true;
	}
}

/***** 한개라도 체크되지 않으면 리턴 *********************************************************************/
function isChecked(obj, msg)
{
	if(!obj) return;

	if(typeof(obj) != "object")
		obj = document.getElementsByName(obj);

	if(obj)
	{
		for(var i=0; i < obj.length; i++)
			if(obj[i].checked) var isChecked = true;
	}

	if(isChecked)
		return true;
	else
	{
		var msg = (msg) ? msg : "선택된 항목이 없습니다.";
		alert(msg);
		return false;
	}
}

/***** 레이어 팝업 열기*********************************************************************/
function layerPopUp(url, w, h, bg, scroll)
{
	if(document.getElementById("ContentLayer")) PopupLayerClose();

	w = (w) ? w : 650;
	h = (h) ? h : 500;
	bg = (bg) ? bg : "#000000";
	scroll = (scroll) ? scroll : "yes";

	var bodyW = document.body.clientWidth;
	var bodyH = document.body.clientHeight;

	var layerX = (bodyW-w) / 2;
	var layerY = (bodyH-h) / 2;

	var obj = document.createElement("div");
	with(obj.style)
	{
		position = "absolute";
		left = 0;
		top = 0;
		zIndex = "1000";
		width = "100%";
		//height = document.body.scrollHeight + "px";
		height=(document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px";
		backgroundColor = bg;
		filter = "Alpha(Opacity=50)";
		opacity = "0.5";
	}
	obj.id = "layerback";
	document.body.appendChild(obj);
	
	var obj = document.createElement("div");
	with(obj.style)
	{
		position = "absolute";
		zIndex = "1001";
		left = layerX + document.body.scrollLeft + "px";
		top = layerY + document.body.scrollTop + "px";
		width = w + "px";
		height = h + "px";
		backgroundColor = "#ffffff";
		border = "3px solid #000000";
	}
	obj.id = "ContentLayer";
	document.body.appendChild(obj);

	var btm = document.createElement("div");
	with(btm.style)
	{
		position = "absolute";
		width = "100%";
		height = 30+"px";
		zIndex = "1001";
		left = 0;
		top = (h - 33) + "px";
		padding = "4px 0 0 0";
		textAlign = "center";
		backgroundColor = "#000000";
		color = "#ffffff";
		font = "bold 13px tahoma; letter-spacing:0px";
	}
	btm.innerHTML = "<a href=\"javascript:PopupLayerClose();\" style=\"color:#ffffff;\"> CLOSE </a>";
	obj.appendChild(btm);

	var ifm = document.createElement("iframe");
	with(ifm.style)
	{
		width = (w - 6) + "px";
		height = (h - 20) + "px";
	}
	ifm.frameBorder = 0;
	ifm.src = url;
	ifm.scrolling = scroll;

	obj.appendChild(ifm);
}

/***** 레이어 팝업 닫기 ***************************************************************/
function PopupLayerClose()
{
	document.getElementById('layerback').parentNode.removeChild(document.getElementById('layerback'));
	document.getElementById('ContentLayer').parentNode.removeChild(document.getElementById('ContentLayer'));
}

/***** 해당오브젝트의 활성/비활성 ***************************************************************/
function ObjDisabled(obj, bo)
{
	if(bo)
	{
		if(obj.type == "checkbox")
			obj.checked = false;
		else if(obj.type == "select-one")
			obj.selectedIndex = 0;

		obj.disabled = true;
		obj.style.backgroundColor = "#f1f1f1";
	}
	else
	{
		obj.disabled = false;
		obj.style.backgroundColor = "#ffffff";
	}
}

/***** 패스워드폼 ***************************************************************/
function PasswordForm(mode, code, data, rurl)
{
	var bwidth = document.body.clientWidth;
	var bheigh = document.documentElement.clientHeight;
	//var test =$(window).scrollTop();
	//var bheigh = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px";
	//var bheigh1 = document.body.clientHeight;
	//var bheigh2 = document.body.scrollHeight;
	//var bheigh3 = document.body.offsetHeight;
	var layerX = (bwidth-300) / 2;
	var layerY = (bheigh / 2)-200;
	//var layerY = (bheigh-200) / 2;
	//alert(test);
	//alert(bheigh);
	//alert(bheigh2);
	//alert(bheigh3);
	var html = '';
	
	html = "<form name=\"pwdfm\" action=\"../board/check.pwd.php\" method=\"post\" onSubmit=\"return chkForm(this);\" target=\"hiddenFrame\">";
	html += "<input type=\"hidden\" name=\"mode\" value=\""+mode+"\" />";
	html += "<input type=\"hidden\" name=\"code\" value=\""+code+"\"/>";
	html += "<input type=\"hidden\" name=\"encData\" value=\""+data+"\"/>";
	html += "<input type=\"hidden\" name=\"rurl\" value=\""+rurl+"\"/>";
	html += "<table cellpadding=\"0\" cellspacing=\"0\" class=\"PassLayer\">";
	html += "<colgroup><col width=\"30\" /><col /><col width=\"30\" /></colgroup>";
	html += "<tr>";
	html += "<td><img src=\"../img/layer/ly_top1.gif\" alt=\"\" /></td>";
	html += "<td class=\"bg_top\"></td>";
	html += "<td><img src=\"../img/layer/ly_top2.gif\" alt=\"\" /></td>";
	html += "</tr><tr>";
	html += "<td class=\"bg_left\"></td>";
	html += "<td align=\"center\" valign=\"top\">";
	html += "<h2><img src=\"../img/layer/pass_lay_tit.gif\" alt=\"비밀번호 입력\" /></h2>";
	html += "<dl><dt><img src=\"../img/layer/ly_pwd.gif\" alt=\"비밀번호\"  /></dt>";
	html += "<dd><input type=\"password\" name=\"pwd\" class=\"lbox w100\" exp=\"비밀번호를 \"/></dd>";
	html += "</dl><input type=\"image\" src=\"../img/layer/btn_layer_ok.gif\" alt=\"입력완료\" />";
	html += "<div class=\"line\"></div></td>";
	html += "<td class=\"bg_right\"></td></tr>";
	html += "<tr><td><img src=\"../img/layer/ly_btm1.gif\" alt=\"\" /></td><td class=\"bg_btm\"></td>";
	html += "<td><img src=\"../img/layer/ly_btm2.gif\" alt=\"레이어닫기\" class=\"hand\" onClick=\"LayerClose();\" /></td></tr></table>";
	html += "</form>";

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1000";
		left = 0;
		top = 0;
		width = "100%";
		//height = "100%";
		//height = document.body.scrollHeight+"px";
		height = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px",
		//height = document.body.clientHeight;
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=30)";
		opacity = "0.5";
	}
	obj.id = "LayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1001";
		left = layerX + document.body.scrollLeft+"px";
		//top = layerY + document.body.scrollTop+"px";
		top = layerY + $(window).scrollTop()+"px";
		width = 313;
		height = 175;
		backgroundColor = "#ffffff";
		//obj.style.backgroundImage = "url('/img/qna_bg.gif')";
		//obj.style.backgroundRepeat = "no-repeat";
		border = "3px solid #000000";
	}
	obj.id = "LayerContent";
	
	obj.innerHTML = html;
	document.body.appendChild(obj);
	//$('#LayerContent').slideDown("slow").draggable();
	$("#LayerContent").slideDown("slow");
}

/***** 패스워드폼메인에서비밀글접근용 ***************************************************************/
function PasswordFormI(mode, code, data, rurl ,rtnm)
{
	var bwidth = document.body.clientWidth;
	var bheigh = document.documentElement.clientHeight;
	//var test =$(window).scrollTop();
	//var bheigh = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px";
	//var bheigh1 = document.body.clientHeight;
	//var bheigh2 = document.body.scrollHeight;
	//var bheigh3 = document.body.offsetHeight;
	var layerX = (bwidth-300) / 2;
	var layerY = (bheigh / 2)-200;
	//var layerY = (bheigh-200) / 2;
	//alert(test);
	//alert(bheigh);
	//alert(bheigh2);
	//alert(bheigh3);
	var html = '';
	
	html = "<form name=\"pwdfm\" action=\""+rtnm+"/board/check.pwd.php\" method=\"post\" onSubmit=\"return chkForm(this);\" target=\"hiddenFrame\">";
	html += "<input type=\"hidden\" name=\"mode\" value=\""+mode+"\" />";
	html += "<input type=\"hidden\" name=\"code\" value=\""+code+"\"/>";
	html += "<input type=\"hidden\" name=\"encData\" value=\""+data+"\"/>";
	html += "<input type=\"hidden\" name=\"rurl\" value=\""+rurl+"\"/>";
	html += "<table cellpadding=\"0\" cellspacing=\"0\" class=\"PassLayer\">";
	html += "<colgroup><col width=\"30\" /><col /><col width=\"30\" /></colgroup>";
	html += "<tr>";
	html += "<td><img src=\""+rtnm+"/img/layer/ly_top1.gif\" alt=\"\" /></td>";
	html += "<td class=\"bg_top\"></td>";
	html += "<td><img src=\""+rtnm+"/img/layer/ly_top2.gif\" alt=\"\" /></td>";
	html += "</tr><tr>";
	html += "<td class=\"bg_left\"></td>";
	html += "<td align=\"center\" valign=\"top\">";
	html += "<h2><img src=\""+rtnm+"/img/layer/pass_lay_tit.gif\" alt=\"비밀번호 입력\" /></h2>";
	html += "<dl><dt><img src=\""+rtnm+"/img/layer/ly_pwd.gif\" alt=\"비밀번호\"  /></dt>";
	html += "<dd><input type=\"password\" name=\"pwd\" size=\"20\" class=\"lbox\" exp=\"비밀번호를 \"/></dd>";
	html += "</dl><input type=\"image\" src=\""+rtnm+"/img/layer/btn_layer_ok.gif\" alt=\"입력완료\" />";
	html += "<div class=\"line\"></div></td>";
	html += "<td class=\"bg_right\"></td></tr>";
	html += "<tr><td><img src=\""+rtnm+"/img/layer/ly_btm1.gif\" alt=\"\" /></td><td class=\"bg_btm\"></td>";
	html += "<td><img src=\""+rtnm+"/img/layer/ly_btm2.gif\" alt=\"레이어닫기\" class=\"hand\" onClick=\"LayerClose();\" /></td></tr></table>";
	html += "</form>";

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1000";
		left = 0;
		top = 0;
		width = "100%";
		//height = "100%";
		//height = document.body.scrollHeight+"px";
		height = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px",
		//height = document.body.clientHeight;
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=30)";
		opacity = "0.5";
	}
	obj.id = "LayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1001";
		left = layerX + document.body.scrollLeft+"px";
		//top = layerY + document.body.scrollTop+"px";
		top = layerY + $(window).scrollTop()+"px";
		width = 313;
		height = 175;
		backgroundColor = "#ffffff";
		//obj.style.backgroundImage = "url('/img/qna_bg.gif')";
		//obj.style.backgroundRepeat = "no-repeat";
		border = "3px solid #000000";
	}
	obj.id = "LayerContent";
	
	obj.innerHTML = html;
	document.body.appendChild(obj);
	//$('#LayerContent').slideDown("slow").draggable();
	$("#LayerContent").slideDown("slow");
}

/***** 패스워드폼(상품문의 전용) ***************************************************************/
function PasswordFormQ(mode, gidx, data, rurl)
{
	var bwidth = document.body.clientWidth;
	var bheigh = document.documentElement.clientHeight;
	//var test =$(window).scrollTop();
	//var bheigh = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px";
	//var bheigh1 = document.body.clientHeight;
	//var bheigh2 = document.body.scrollHeight;
	//var bheigh3 = document.body.offsetHeight;
	var layerX = (bwidth-300) / 2;
	var layerY = (bheigh / 2)-100;
	//var layerY = (bheigh-200) / 2;
	//alert(test);
	//alert(bheigh);
	//alert(bheigh2);
	//alert(bheigh3);
	var html = '';
	
	html = "<form name=\"pwdfm\" action=\"./check.pwd.Q.php\" method=\"post\" onSubmit=\"return chkForm(this);\" target=\"hiddenFrame\">";
	html += "<input type=\"hidden\" name=\"mode\" value=\""+mode+"\" />";
	html += "<input type=\"hidden\" name=\"gidx\" value=\""+gidx+"\"/>";
	html += "<input type=\"hidden\" name=\"encData\" value=\""+data+"\"/>";
	html += "<input type=\"hidden\" name=\"rurl\" value=\""+rurl+"\"/>";
	html += "<table cellpadding=\"0\" cellspacing=\"0\" class=\"PassLayer\">";
	html += "<colgroup><col width=\"30\" /><col /><col width=\"30\" /></colgroup>";
	html += "<tr>";
	html += "<td><img src=\"../img/layer/ly_top1.gif\" alt=\"\" /></td>";
	html += "<td class=\"bg_top\"></td>";
	html += "<td><img src=\"../img/layer/ly_top2.gif\" alt=\"\" /></td>";
	html += "</tr><tr>";
	html += "<td class=\"bg_left\"></td>";
	html += "<td align=\"center\" valign=\"top\">";
	html += "<h2><img src=\"../img/layer/pass_lay_tit.gif\" alt=\"비밀번호 입력\" /></h2>";
	html += "<dl><dt><img src=\"../img/layer/ly_pwd.gif\" alt=\"비밀번호\"  /></dt>";
	html += "<dd><input type=\"password\" name=\"pwd\" size=\"20\" class=\"lbox\" exp=\"비밀번호를 \"/></dd>";
	html += "</dl><input type=\"image\" src=\"../img/layer/btn_layer_ok.gif\" alt=\"입력완료\" />";
	html += "<div class=\"line\"></div></td>";
	html += "<td class=\"bg_right\"></td></tr>";
	html += "<tr><td><img src=\"../img/layer/ly_btm1.gif\" alt=\"\" /></td><td class=\"bg_btm\"></td>";
	html += "<td><img src=\"../img/layer/ly_btm2.gif\" alt=\"레이어닫기\" class=\"hand\" onClick=\"LayerClose();\" /></td></tr></table>";
	html += "</form>";

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1000";
		left = 0;
		top = 0;
		width = "100%";
		//height = "100%";
		//height = document.body.scrollHeight+"px";
		height = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px",
		//height = document.body.clientHeight;
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=30)";
		opacity = "0.5";
	}
	obj.id = "LayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1001";
		left = layerX + document.body.scrollLeft+"px";
		//top = layerY + document.body.scrollTop+"px";
		top = layerY + $(window).scrollTop()+"px";
		width = 313;
		height = 175;
		backgroundColor = "#ffffff";
		//obj.style.backgroundImage = "url('/img/qna_bg.gif')";
		//obj.style.backgroundRepeat = "no-repeat";
		border = "3px solid #000000";
	}
	obj.id = "LayerContent";
	
	obj.innerHTML = html;
	document.body.appendChild(obj);
	//$('#LayerContent').slideDown("slow").draggable();
	$("#LayerContent").slideDown("slow");
}

/***** 패스워드폼(상품후기 전용) ***************************************************************/
function PasswordFormR(mode, gidx, data, rurl)
{
	var bwidth = document.body.clientWidth;
	var bheigh = document.documentElement.clientHeight;
	//var test =$(window).scrollTop();
	//var bheigh = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px";
	//var bheigh1 = document.body.clientHeight;
	//var bheigh2 = document.body.scrollHeight;
	//var bheigh3 = document.body.offsetHeight;
	var layerX = (bwidth-300) / 2;
	var layerY = (bheigh / 2)-100;
	//var layerY = (bheigh-200) / 2;
	//alert(test);
	//alert(bheigh);
	//alert(bheigh2);
	//alert(bheigh3);
	var html = '';
	
	html = "<form name=\"pwdfm\" action=\"./check.pwd.R.php\" method=\"post\" onSubmit=\"return chkForm(this);\" target=\"hiddenFrame\">";
	html += "<input type=\"hidden\" name=\"mode\" value=\""+mode+"\" />";
	html += "<input type=\"hidden\" name=\"gidx\" value=\""+gidx+"\"/>";
	html += "<input type=\"hidden\" name=\"encData\" value=\""+data+"\"/>";
	html += "<input type=\"hidden\" name=\"rurl\" value=\""+rurl+"\"/>";
	html += "<table cellpadding=\"0\" cellspacing=\"0\" class=\"PassLayer\">";
	html += "<colgroup><col width=\"30\" /><col /><col width=\"30\" /></colgroup>";
	html += "<tr>";
	html += "<td><img src=\"../img/layer/ly_top1.gif\" alt=\"\" /></td>";
	html += "<td class=\"bg_top\"></td>";
	html += "<td><img src=\"../img/layer/ly_top2.gif\" alt=\"\" /></td>";
	html += "</tr><tr>";
	html += "<td class=\"bg_left\"></td>";
	html += "<td align=\"center\" valign=\"top\">";
	html += "<h2><img src=\"../img/layer/pass_lay_tit.gif\" alt=\"비밀번호 입력\" /></h2>";
	html += "<dl><dt><img src=\"../img/layer/ly_pwd.gif\" alt=\"비밀번호\"  /></dt>";
	html += "<dd><input type=\"password\" name=\"pwd\" size=\"20\" class=\"lbox\" exp=\"비밀번호를 \"/></dd>";
	html += "</dl><input type=\"image\" src=\"../img/layer/btn_layer_ok.gif\" alt=\"입력완료\" />";
	html += "<div class=\"line\"></div></td>";
	html += "<td class=\"bg_right\"></td></tr>";
	html += "<tr><td><img src=\"../img/layer/ly_btm1.gif\" alt=\"\" /></td><td class=\"bg_btm\"></td>";
	html += "<td><img src=\"../img/layer/ly_btm2.gif\" alt=\"레이어닫기\" class=\"hand\" onClick=\"LayerClose();\" /></td></tr></table>";
	html += "</form>";

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1000";
		left = 0;
		top = 0;
		width = "100%";
		//height = "100%";
		//height = document.body.scrollHeight+"px";
		height = (document.body.scrollHeight > document.documentElement.scrollHeight) ? document.body.scrollHeight+"px" : document.documentElement.scrollHeight+"px",
		//height = document.body.clientHeight;
		backgroundColor = "#000000";
		filter = "Alpha(Opacity=30)";
		opacity = "0.5";
	}
	obj.id = "LayerBg";
	document.body.appendChild(obj);

	var obj = document.createElement("div");
	with (obj.style){
		position = "absolute";
		zIndex = "1001";
		left = layerX + document.body.scrollLeft+"px";
		//top = layerY + document.body.scrollTop+"px";
		top = layerY + $(window).scrollTop()+"px";
		width = 313;
		height = 175;
		backgroundColor = "#ffffff";
		//obj.style.backgroundImage = "url('/img/qna_bg.gif')";
		//obj.style.backgroundRepeat = "no-repeat";
		border = "3px solid #000000";
	}
	obj.id = "LayerContent";
	
	obj.innerHTML = html;
	document.body.appendChild(obj);
	//$('#LayerContent').slideDown("slow").draggable();
	$("#LayerContent").slideDown("slow");
}

function LayerClose()
{
	//document.getElementById('LayerBg').style.display = "none";
	//document.getElementById('LayerContent').style.display = "none";

	document.getElementById('LayerBg').parentNode.removeChild(document.getElementById('LayerBg'));
	document.getElementById('LayerContent').parentNode.removeChild(document.getElementById('LayerContent'));

	//$('#LayerContent').slideUp("fast");
	//document.getElementById('LayerBg').parentNode.removeChild(document.getElementById('LayerBg'));
	//document.getElementById('LayerContent').parentNode.removeChild(document.getElementById('LayerContent'));
}

function CmtPassForm(pobj, code, num, rtnm)
{
	var obj = document.getElementById('CmtPwdLayer');
	if(obj != null) obj.parentNode.removeChild(obj);
	var html = "";
	html = "<form name=\"cmtform\" action=\""+rtnm+"/board/board.act.php\" method=\"post\" onSubmit=\"return chkForm(this);\" target=\"hiddenFrame\">";
	html += "<input type=\"hidden\" name=\"num\" value=\""+num+"\" />";
	html += "<input type=\"hidden\" name=\"mode\" value=\"chkpwd\" />";
	html += "<input type=\"hidden\" name=\"code\" value=\""+code+"\"/>";
	html += "<input type=\"hidden\" name=\"act\" value=\"cmtd\" />";
	html += "<input type=\"password\" id=\"pwd\" name=\"pwd\" class=\"lbox\" align=\"absmiddle\" exp=\"비밀번호를 \"/> ";
	html += "<input type=\"image\" src=\""+rtnm+"/img/common_btn_cmt_ok.gif\" title=\"확인\" align=\"absmiddle\" /> ";
	html += "<img src=\""+rtnm+"/img/common_btn_cmt_cancel.gif\" alt=\"취소\" align=\"absmiddle\" class=\"hand\" onClick=\"javascript:document.getElementById('CmtPwdLayer').parentNode.removeChild(document.getElementById('CmtPwdLayer'));\" />";
	html += "</form>";


	obj = document.createElement("span");
	obj.id = "CmtPwdLayer";
	obj.style.width = "270px";
	obj.style.border = "#dddddd 1px solid";
	obj.style.padding = "3px";
	obj.style.backgroundColor = "#ffffff";
	obj.style.position = "absolute";

	if(pobj.innerHTML.toLowerCase().indexOf('img') != -1)
	{
		obj.style.marginTop = "0px";
		obj.style.marginLeft = "-250px";
	}
	else
	{
		obj.style.marginTop = "0px";
		obj.style.marginLeft = "-120px";
	}

	obj.innerHTML = html;
	pobj.parentNode.insertBefore(obj, pobj.previousSibling);
	document.getElementById('pwd').focus();
}

function ReviewPassForm(pobj, gidx, num, rtnm)
{
	var obj = document.getElementById('CmtPwdLayer');
	if(obj != null) obj.parentNode.removeChild(obj);
	var html = "";
	html = "<form name=\"cmtform\" action=\""+rtnm+"/goods/review.act.php\" method=\"post\" onSubmit=\"return chkForm(this);\" target=\"hiddenFrame\">";
	html += "<input type=\"hidden\" name=\"num\" value=\""+num+"\" />";
	html += "<input type=\"hidden\" name=\"mode\" value=\"chkpwd\" />";
	html += "<input type=\"hidden\" name=\"gidx\" value=\""+gidx+"\"/>";
	html += "<input type=\"hidden\" name=\"act\" value=\"cmtd\" />";
	html += "<input type=\"password\" id=\"pwd\" name=\"pwd\" class=\"lbox\" align=\"absmiddle\" exp=\"비밀번호를 \"/> ";
	html += "<input type=\"image\" src=\""+rtnm+"/img/common_btn_cmt_ok.gif\" title=\"확인\" align=\"absmiddle\" /> ";
	html += "<img src=\""+rtnm+"/img/common_btn_cmt_cancel.gif\" alt=\"취소\" align=\"absmiddle\" class=\"hand\" onClick=\"javascript:document.getElementById('CmtPwdLayer').parentNode.removeChild(document.getElementById('CmtPwdLayer'));\" />";
	html += "</form>";


	obj = document.createElement("span");
	obj.id = "CmtPwdLayer";
	obj.style.width = "270px";
	obj.style.border = "#dddddd 1px solid";
	obj.style.padding = "3px";
	obj.style.backgroundColor = "#ffffff";
	obj.style.position = "absolute";

	//if(pobj.innerHTML.toLowerCase().indexOf('img') != -1)
	//{
		obj.style.marginTop = "0px";
		obj.style.marginLeft = "-250px";
	//}

	obj.innerHTML = html;
	pobj.parentNode.insertBefore(obj, pobj.previousSibling);
	document.getElementById('pwd').focus();
}

/***** Make Category SelectBox(수정 및 보안 요구)  ********************************************************/
function MakeCateBox(name, cnt, val, type, formnm)
{
	cnt = (cnt) ? cnt : 1;
	if(type == "multiple") type = "multiple style=\"width:160px;height:96px;\"";

	for(var i=0; i < cnt; i++)
	{
		document.write("<select "+ type +" name='"+ name + "' idx=" + i + " onChange='chgCategory(this, "+(i+1)+")' class='sbox'></select>");
	}

	oForm = eval("document.forms['" + formnm + "']");
	if(oForm == null) 
		this.oCate = eval("document.forms[0]['" + name +"']");
	else
		this.oCate = eval("document." + oForm.name + "['" + name + "']"); 

	if(cnt == 1)
		this.oCate = new Array(this.oCate);

	this.CateBoxInit = CateBoxInit;
	this.CateBoxSet = CateBoxSet;
	this.getCate = getCate;
	this.getRequest = getRequest;
	this.chgCategory = chgCategory;
	this.CateBoxInit(0);

	function CateBoxInit()
	{
		this.CateBoxSet();
		this.getCate(this.oCate[0]);
	}

	function CateBoxSet(depth)
	{
		i = (depth) ? depth : 0;

		for(i=0; i < cnt; i++)
		{
			if(this.oCate[i])
				this.oCate[i].options[0] = new Option("-- "+(i+1)+"차 상품분류 --", "");
		}
	}

	function getCate(obj)
	{
		for(i=0; i < cnt; i++)
		{
			this.getRequest(this.oCate[i]);
		}
	}

	function getRequest(obj)
	{
		idx = obj.getAttribute("idx");
		val = (obj.value) ? obj.value : val; 
		
		$.getJSON("/common/category.json.php?idx="+idx+"&val="+val, function(data){
			if(data)
			{
				$.each(data, function(index, entry){
					Opt = document.createElement("OPTION");
					Opt.text = entry["name"];
					Opt.value = entry["code"];
					obj.options.add(Opt);

					if(entry["selected"])
						obj.selectedIndex = index+1;
				});
			}
		});
	}

	function chgCategory(obj, depth)
	{
		var name = obj.name;
		value = obj.value;
		sObj = this.oCate[depth];

		for(var i = depth; i <= document.getElementsByName(name).length; i++)
		{
			if(this.oCate[i])
			{
				SelectRemoveAll(this.oCate[i]);
				this.oCate[i].options[0] = new Option("-- "+(i+1)+"차 분류선택 --", "");
			}
		}

		$.getJSON("/common/category.json.php?val="+value+"&idx="+depth, function(data){
			if(data)
			{
				$.each(data, function(index, entry){
					Opt = document.createElement("OPTION");
					Opt.text = entry["name"];
					Opt.value = entry["code"];
					sObj.options.add(Opt);

					if(entry["selected"])
						sObj.selectedIndex = index+1;
				});
			}
		});
	}
}

/***** SelectBox Option Add ************************************************************/
function SelectAdd(obj, text, val)
{
	var nOpt = document.createElement("OPTION");
	nOpt.text = text;
	nOpt.value = val;
	obj.options.add(nOpt);
}

/***** SelectBox Option All Delete *****************************************************/
function SelectRemoveAll(obj)
{
	for(var i=obj.length-1; i >= 0; i--)
		SelectRemoveList(obj, i);
}

/***** SelectBox Option Delete *********************************************************/
function SelectRemoveList(obj, i)
{
	obj.remove(i);
}

/***** NumberFormat ********************************************************************/
function NumberFormat(number)
{
	var arr = new Array();
	number = String(number);

	for(var i=1; i <= number.length; i++)
	{
		if(i%3)
			arr[number.length-i] = number.charAt(number.length-i);
		else
			arr[number.length-i] = ","+number.charAt(number.length-i);
	}

	return arr.join('').replace(/^,/,'');
}

/***** Comma Delete ********************************************************************/
function stripComma(number)
{
	var reg = /(,)*/g;

	number = String(number).replace(reg, "");

	return number;
}

/***** 통화형태로 변환 *****************************************************************/
function toCurrency(obj)
{
	if(obj.disabled) return false;

	var num = obj.value.stripspace();

	if(num == "") return false;

	if(!checkNumber(stripChar(num)))
	{
		num = stripChar(num, false);
		obj.blur();
		obj.focus();
	}

	num = stripChar(stripComma(num), false);
	num = removePreZero(num);
	obj.value = NumberFormat(num);
}

/***** 숫자문자열의 '0' 시작문자 제거 **************************************************/
function removePreZero(str)
{
	var i, result;

	if(str == "0") return str;

	for(i=0; i < str.length; i++)
		if(str.substr(i,1) != "0") break;

	result = str.substr(i, str.length-i);
	return result;
}

/***** 문자열 제거 *********************************************************************/
function stripChar(val, isDec)
{
	var i;
	var minus = "-";
	var number = "1234567890"+((isDec) ? "." : "");
	var result = "";

	for(i=0; i < val.length; i++)
	{
		chkno = val.charAt(i);

		if(i == 0 && chkno == minus)
		{
			result += minus;
		}
		else
		{
			for(j=0; j < number.length; j++)
			{
				if(chkno == number.charAt(j))
				{
					result += number.charAt(j);
					break;
				}
			}
		}
	}

	return result;
}

/***** Layer Open **********************************************************************/
function OpenLayer(id, mode)
{
	var obj = document.getElementById(id);

	if(mode)
		obj.style.display = mode;
	else
		obj.style.display = (obj.style.display != "none") ? "none" : "block";

}

/***** checkbox 체크수 제한 ************************************************************/
function ChkLimit(obj, max)
{
	var name = obj.name;
	var gobj = document.getElementsByName(name);
	var chkcnt = 0;

	for(var i=0; i < gobj.length; i++)
	{
		if(gobj[i].checked)
			chkcnt++;
	}

	if(obj.checked && chkcnt > max)
	{
		alert("최대 "+max+"개까지 체크 가능합니다.");
		obj.checked = false;
	}
}

/***** CheckBox ==> Radio **************************************************************/
function SingleChk(obj)
{
	var allObj = document.getElementsByName(obj.name);
	
	for(var i=0; i < allObj.length; i++)
	{
		if(allObj[i] == obj)
			allObj[i].checked = (obj.checked) ? true : false;
		else
			allObj[i].checked = false;
	}
}

/***** Flash Patch *********************************************************************/
function setEmbed() 
{ 
	var obj = new String; 
	var parameter = new String; 
	var embed = new String; 
	var html = new String; 
	var allParameter = new String; 
	var clsid = new String; 
	var codebase = new String; 
	var pluginspace = new String; 
	var embedType = new String; 
	var src = new String; 
	var width = new String; 
	var height = new String; 
	
	this.init = function( getType , s ,w , h ){ 
		
		if(getType == "flash") 
		{ 
			clsid = "D27CDB6E-AE6D-11cf-96B8-444553540000";        
			codebase = "http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0"; 
			pluginspage = "http://www.macromedia.com/go/getflashplayer"; 
			embedType = "application/x-shockwave-flash"; 
		} 
		/* type 추가 
		else if ( ) 
		{ 
		} 
		*/
		
		parameter += "<param name='movie' value='"+ s + "'>\n";  
		parameter += "<param name='quality' value='high'>\n";    
		src = s; 
		width = w; 
		height = h; 
	} 
	
	this.parameter = function( parm , value ) {      
		parameter += "<param name='"+parm +"' value='"+ value + "'>\n";        
		allParameter += " "+parm + "='"+ value+"'"; 
	}  
	
	this.show = function() { 
		if(clsid) 
			obj = "<object classid=\"clsid:"+ clsid +"\" codebase=\""+ codebase +"\" width='"+ width +"' height='"+ height +"'>\n"; 
		
		embed = "<embed src='" + src + "' pluginspage='"+ pluginspage + "' type='"+ embedType + "' width='"+ width + "' height='"+ height +"'"+ allParameter +" ></embed>\n"; 
		
		if(obj) 
			embed += "</object>\n"; 
		
		html = obj + parameter + embed; 
		
		document.write( html );  
	} 
}

/***** Quick Scroll ********************************************************************/
function QuickScroll(g,id)
{
	var obj = document.getElementById(id);

	obj.scrollTop += g;
}

/***** Select Box Layer ****************************************************************/
function selectBoxView(id)
{
	_ID(id).style.display = "block";
}

function selectBoxHide(id)
{
	_ID(id).style.display = "none";
}

/***** Get Cookie **********************************************************************/
function getCookie(name)
{
	var nameOfCookie = name + "=";
	var x = 0;

	while (x <= document.cookie.length)
	{
		var y = (x + nameOfCookie.length);

		if (document.cookie.substring(x, y) == nameOfCookie) 
		{
			if((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
				
			return unescape( document.cookie.substring( y, endOfCookie ) );
		}

		x = document.cookie.indexOf(" ", x) + 1;

		if(x == 0)
			break;
	}

	return "";
}

/***** Focus 테두리 삭제 ********************************************************************/
/*
function bluring()
{ 
	if(event.srcElement.tagName=='A' || event.srcElement.tagName=='IMG')
		document.body.focus(); 
}
document.onfocusin=bluring; 

function LeftONOFF()
{
	if(_ID('LeftMenuOn').style.display == "block")
	{
		_ID('LeftMenuOn').style.display = "none";
		_ID('LeftMenuOff').style.display = "block";
		_ID('off_btn').style.display = "block";
		document.getElementById('LeftFooter').src = "../img/left/left_footer_off.gif";

		setCookie("CK_LEFT", "off", 1);
	}
	else
	{
		_ID('LeftMenuOn').style.display = "block";
		_ID('LeftMenuOff').style.display = "none";
		_ID('off_btn').style.display = "none";
		document.getElementById('LeftFooter').src = "../img/left/left_footer_on.gif";

		setCookie("CK_LEFT", "on", 1);
	}
}
*/
/*** time count ********************************************************************/
function TimeCount()
{
	s++;

	if(s == 60)
	{
		s = 0;
		m++;
	}

	if(m == 60)
	{
		m = 0;
		h++;
	}

	if(h == 24)
	{
		s = 0;
		m = 0;
		h = 0;
	}

	var str_h = h.toString();
	var str_m = m.toString();
	var str_s = s.toString();

	str_h = (h < 10) ? '0'+str_h : str_h;
	str_m = (m < 10) ? '0'+str_m : str_m;
	str_s = (s < 10) ? '0'+str_s : str_s;

	var time = str_h+"시 "+str_m+"분 "+str_s+"초";

	document.getElementById('stime').innerHTML = time;
	window.setTimeout("TimeCount()", 1000);
}

/*** iframe resize *********************************************************************/
function resizeIframe(obj, id)
{
	//obj.setExpression('width', "");

	obj.setExpression('height', eval(id + '.document.body.scrollHeight') + 20);
	obj.setExpression('width', eval(id + '.document.body.scrollWidth'));
}

function ShowFlash(url, width, height){
        document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="' + width + '" height="' + height + '" VIEWASTEXT>');
        document.write('<param name="movie" value="' + url + '">');
        document.write('<param name="quality" value="high">');
        document.write('<param name="wmode" value="transparent">');
        document.write('<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="' + width + '" height="' + height + '"></embed>');
        document.write('</object>');
}

/** swap img */
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/***BookMark(즐겨찾기) *********************************************************************/
function addBookMark(url, title)
{
	var browser = navigator.userAgent.toLowerCase();

	if(window.sidebar)			//Mozilla, Firefox, Netscape
		window.sidebar.addPanel(title, url, "");
	else if(window.external)	//IE, Chrome
	{
		if(browser.indexOf("chrome") == -1)
			window.external.AddFavorite(url, title);
		else
			alert("CTRL + D 또는 Command + D를 눌러 즐겨찾기에 추가해 주세요.");
	}
	else if(window.opera && window.print)	//Opera
	{
		return true;
	}
	else if(browser.indexOf("konqueror") != -1)
	{
		alert("CTRL + B를 눌러 즐겨찾기에 추가해 주세요.");
	}
	else if(browser.indexOf("webkit") != -1)
	{
		alert("CTRL + B 또는 Command + B를 눌러 즐겨찾기에 추가해 주세요.");
	}
	else
	{
		alert("사용하고 계시는 브라우저에서는 즐겨찾기가 지원되지 않습니다.");
	}
}

/***새로 추가 *********************************************************************/
/*
function showLayerFancy()
{
	isIE6 = (typeof(document.body.style.maxHeight) === 'undefined');
    var bHeight = getDocHeight();
    var default_style = {'position':'absolute', 'width': '100%', 'height': bHeight, 'background':'url(/img/bg_dot.png)'};
	var url = "/swadm/login_test.php";

	 $.getJSON('/swadm/aa.php', {test: 'subscribe'}, function(resp){
        $('#fancybox-overlay').removeAttr('style');
        $('#fancybox-overlay').css(default_style).fadeIn('fast',function(){
			var oDiv = document.createElement('div');
			$(oDiv).attr('id', 'subsWrap').appendTo(document.body);
			placeSubscribe();
            $(oDiv).hide().load(url).fadeIn('fast');
            $(window).bind('resize', placeSubscribe);
            if (isIE6)
				$(window).bind('scroll', placeSubscribe);
        });
       // if (callback) callback();
    });
}

function showFancyLayer(url, callback)
{
    isIE6 = (typeof(document.body.style.maxHeight) === 'undefined');
    var bHeight = getDocHeight();
    var default_style = {'width': '100%', 'height': bHeight, 'background':'url(/img/bg_dot.png)'};

    $.getJSON('/abtest/query', {test: 'subscribe'}, function(resp){
        $('#fancybox-overlay').removeAttr('style');
        $('#fancybox-overlay').css(default_style).fadeIn('fast',function(){
            var oDiv = document.createElement('div');
            $(oDiv).attr('id', 'subsWrap').appendTo(document.body);
            placeSubscribe();
            $(oDiv).hide().load(url).fadeIn('fast');
            $(window).bind('resize', placeSubscribe);
            if (isIE6)
            $(window).bind('scroll', placeSubscribe);
        });
        if (callback) callback();
    });
}

function getDocHeight() {
    var D = document;
    return Math.max(
        Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
        Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
        Math.max(D.body.clientHeight, D.documentElement.clientHeight)
    );
}

var $w = $(window);
var $d = $(document);
function placeSubscribe(height)
{
    var $subsWrap = $('#subsWrap');
	var $subscribe = $('.subscribe');
	if($subsWrap.length==0) return false;

    var height = $subscribe.length==0 ? $subsWrap.height() : $subscribe.height();
	var width = $subsWrap.width();

    var bodyH = $w.height();

    var isIE6 = (typeof(document.body.style.maxHeight) === 'undefined');
    if (isIE6)
    {
        var sTop = $d.scrollTop();
        var tTop = Math.max(20, sTop + Math.floor((bodyH-height)/2));
        $subsWrap.css({'width':width,height:height,'position':'absolute','top':tTop+'px'});
    }
    else
    {
        var tTop = Math.max(20, Math.floor((bodyH-height)/2));
        var tLeft =  ($w.width()-width)/2;
        $subsWrap.css({'width':width,height:height,'position':'fixed','top':tTop+'px','left':tLeft+'px'});
    }
}
*/
/***3pod 서버에서 쓰는 주소찾기(20140116) *********************************************************************/
function getZipcode(pos)
{
	window.open("/common/zip.find.php?pos="+pos, "zipcode", "width=600, height=400, scrollbars=yes");
}

/***3pod 서버에서 쓰는 주소찾기(20140116) *********************************************************************/
function getZipcode2(pos)
{
	window.open("/common/zipcode/zip2.php?pos="+pos, "zipcode", "width=500, height=442, scrollbars=yes");
}

/***배송지관리 팝업창***/
function getZipPop()
{
	window.open("/common/zip.pop.php", "zippop", "width=1200, height=400, scrollbars=yes");
}

/***보안코드처리***/
function getNewCrypt()
{
	document.hiddenFrame.location.href = "/lib/new.crypt.php";
}