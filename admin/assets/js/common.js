//디자인 체크,라디오
//체크 올
$(document).on('change', '.label_control input[type="checkbox"]', function () {
	if($(this).closest('label').hasClass('check_all') ){
		if ($(this).is(":checked")) {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", true);
		} else {
			$(this).closest('.label_control').find('input[type="checkbox"]').prop("checked", false);
		}
	}else{
		if (!$(this).is(":checked")) {
			$(this).closest('.label_control').find('.check_all input[type="checkbox"]').prop("checked", false);
		}
	}
});


//디자인 셀렉트
$('.design_select .ds_value').click(function(event){
	if(!$(this).closest('.design_select').hasClass('disabled')){
	$(this).closest('.design_select').addClass('active').find('.ds_options').show();
	}
});

$('.ds_options .ds_list a').click(function(event){
	var selVal = $(this).text();
	var selData =  $(this).attr('data-rel');
	$(this).closest('.design_select').find('.ds_value').text(selVal);
	$(this).closest('.design_select').find('input').val(selData);
	$(this).closest('.ds_options').hide();
	$(this).closest('.design_select').find('.ds_list a').removeClass('active');
	$(this).addClass('active');
	$(this).closest('.design_select').removeClass('active');
});
$('.ds_options .ds_close,.ds_options .ds_bg').click(function(event){
	$(this).closest('.design_select').removeClass('active');
	$(this).closest('.ds_options').hide()
});


//레이어팝업 */
function layerShow(thisClass){
    //$('.contLayer').hide();
    $('.'+thisClass).show();
	
	if($('.'+thisClass).hasClass('fixed_layer')){
		$('html,body').css('overflow-y' , 'hidden');
	}
}
function layerHide(thisClass){
    $('.'+thisClass).hide();
	
	if($('.layer_form.fixed_layer:visible').length == 0 ){
		$('html,body').css('overflow-y' , 'auto');
	}
}

//인풋최대 글자수 제한
$(document).on('keyup', '.max_text', function () {
    var numChar = $(this).val().length;
	var maxNum = $(this).attr('maxlength');
	var lenDisplay = $(this).closest('.ip_group').find('.max_len b');
	 if(numChar == maxNum){
	  alert('최대 글자 수가 모두 찼습니다.');
	}
	lenDisplay.text(numChar);
});

//글자수 제한있는 항목 첫 로드 시 계산
if ($('span').hasClass('max_len')){
	$(".max_len").each(function() {
		var numChar = $(this).closest('.ip_group').find('.max_text').val().length;
		$(this).find('b').text(numChar);
	});
}

$('.active_control a').click(function(){
	$(this).closest('.active_control').find('a').removeClass('active');
	$(this).addClass('active');
});

//데이트픽커

/* MonthPicker 옵션 */
options = {
	pattern: 'yyyy-mm', // Default is 'mm/yyyy' and separator char is not mandatory
	selectedYear: 2022,
	startYear: 2010,
	finalYear: 2022,
	monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
};
if ($('input').hasClass('monthpicker')) {		
	$('.monthpicker').monthpicker(options);	
}

//데이트픽커
$.datepicker.setDefaults({
	dateFormat: 'yy-mm-dd',
	prevText: '이전 달',
	nextText: '다음 달',
	monthNames: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
	dayNames: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
	dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
	//changeMonth: true, //셀렉트박스로 월선택
	//changeYear: true, //셀렉트박스로 년선택
	showMonthAfterYear: true,
	//showOn: 'button',
	yearSuffix: ' -'
});

if ($('input').hasClass('datepicker')) {
	$(".datepicker").datepicker({});
}



/*날짜선택*/
/* 날짜 객체 받아서 문자열로 리턴하는 함수 */
function getDateStr(myDate){
	return (myDate.getFullYear() + '-' + ("0" + (myDate.getMonth() + 1)).slice(-2) + '-' + ("0" + myDate.getDate()).slice(-2))
}
function getDateStr2(myDate){
	return (myDate.getFullYear() + '-' + ("0" + (myDate.getMonth())).slice(-2))
}
/* 오늘 날짜를 문자열로 반환 */
function today() {
  var d = new Date();
  return getDateStr(d)
}
function month() {
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
	if(month < 10){ 
		month = '0'+ month;
	}
  return year + '-' + month;
}
/* 일주일전 */
function lastWeek() {
  var d = new Date()
  var dayOfMonth = d.getDate()
  d.setDate(dayOfMonth - 7)
  return getDateStr(d)
}
  /* 15일 전*/
  function halfMonth() {
  var d = new Date()
  var dayOfMonth = d.getDate()
  d.setDate(dayOfMonth - 15)
  return getDateStr(d)
}
/* 당월*/
function nowMonth() {
  var d = new Date()
  var dayOfMonth = d.getDate();
  var day = ('0' + d.getDate()).slice(-2);
  d.setDate(dayOfMonth - day + 1)
  return getDateStr(d)
}
 /* 전월*/
function prevMonth() {
	var date = new Date();
	//현재 시간 기준으로 1일을 구한 후
	var firstDayOfMonth = new Date( date.getFullYear(), date.getMonth() , 1 );
	//현재 시간 기준 1일을 구한 후 하루를 빼주면 전월 말일 이됨
	var lastMonth = new Date ( firstDayOfMonth.setDate( firstDayOfMonth.getDate() - 1 ) );
	//월은 0 - 11까지 이므로 1이적게 나와서 1을 더해준다
	check_month = lastMonth.getMonth()+1;
	if(check_month < 10){
	check_month = "0"+check_month;
	}
	sDate = lastMonth.getFullYear()+"-"+check_month+"-01";
    date.setDate(sDate)
  return (sDate)
}
function prevMonthLast() {
	var date = new Date();
	//현재 시간 기준으로 1일을 구한 후
	var firstDayOfMonth = new Date( date.getFullYear(), date.getMonth() , 1 );
	//현재 시간 기준 1일을 구한 후 하루를 빼주면 전월 말일 이됨
	var lastMonth = new Date ( firstDayOfMonth.setDate( firstDayOfMonth.getDate() - 1 ) );
	//월은 0 - 11까지 이므로 1이적게 나와서 1을 더해준다
	check_month = lastMonth.getMonth()+1;
	if(check_month < 10){
	check_month = "0"+check_month;
	}
	eDate = lastMonth.getFullYear() + "-" + check_month+ "-" + lastMonth.getDate();
    date.setDate(eDate)
  return (eDate)
}
/* 오늘로부터 1개월전 날짜 반환 */
function selMonth(selDate) {
  var d = new Date()
  var monthOfYear = d.getMonth()
  d.setMonth(monthOfYear - selDate)
  return getDateStr(d)
}
/* 일주일후 */
function nextWeek() {
  var d = new Date()
  var dayOfMonth = d.getDate()
  d.setDate(dayOfMonth + 7)
  return getDateStr(d)
}
/* 오늘로부터 1개월후 날짜 반환 */
function afterSelMonth(selDate) {
  var d = new Date()
  var monthOfYear = d.getMonth()
  d.setMonth(monthOfYear + Number(selDate));
  return getDateStr(d);
}
/* 오늘로부터 선택월 이전 날짜 반환 
function prevMonth(selDate) {
  var d = new Date()
  var monthOfYear = d.getMonth()
  d.setMonth(monthOfYear - selDate)

  return getDateStr2(d)
}*/

$('.date_sel.date_sel1 button').click(function(){//과거-현재
	var selDate = $(this).attr('data-rel');
	if(selDate == 0){
		$(this).closest('.date_cwrap').find('.dc_start').val(today());
	}else if(selDate == "7d"){
		$(this).closest('.date_cwrap').find('.dc_start').val(lastWeek());
	}else if(selDate == "15d"){
		$(this).closest('.date_cwrap').find('.dc_start').val(halfMonth());
	}else if(selDate == "nm"){
		$(this).closest('.date_cwrap').find('.dc_start').val(nowMonth());
	}else if(selDate == "pm"){
		$(this).closest('.date_cwrap').find('.dc_start').val(prevMonth());
		$(this).closest('.date_cwrap').find('.dc_end').val(prevMonthLast());
		return false
	}else{
		$(this).closest('.date_cwrap').find('.dc_start').val(selMonth(selDate));
	}
	$(this).closest('.date_cwrap').find('.dc_end').val(today());
});

$('.date_sel.date_sel2 button').click(function(){//현재-미래
	var selDate = $(this).attr('data-rel');
	if(selDate == 0){
		$(this).closest('.date_cwrap').find('.dc_end').val(today());
	}else if(selDate == "7d"){
		$(this).closest('.date_cwrap').find('.dc_end').val(lastWeek());
	}else{
		$(this).closest('.date_cwrap').find('.dc_end').val(afterSelMonth(selDate));
	}
	$(this).closest('.date_cwrap').find('.dc_start').val(today());
});

$('.date_sel.date_sel3 button').click(function(){//현재-미래
	var selDate = $(this).attr('data-rel');
	if(selDate == 0){
		$(this).closest('.month_cwrap').find('.dc_start').val(month());
	}else{
		$(this).closest('.month_cwrap').find('.dc_start').val(prevMonth(selDate));
	}
	$(this).closest('.month_cwrap').find('.dc_end').val(month());
});

$(document).ready(function() {
	if($('div').hasClass('date_cwrap')){
		$(this).find('.dc_start').val(today());
		$(this).find('.dc_end').val(today());
	}
});

$(document).ready(function() {
	if($('div').hasClass('month_cwrap')){
		$(this).find('.dc_start').val(month());
		$(this).find('.dc_end').val(month());
	}
});

$('.hd_bottom').hover(function(){
	let subHeight = 0;
	$('#nav > li > ul').each(function(){
		if(subHeight < $(this).outerHeight()){
			subHeight = $(this).outerHeight()
		}
	});
	$('.nav_bg').height(subHeight)
	$('#nav > li > ul').show();
});
$('.hd_bottom').mouseleave(function(){
	$('.nav_bg').height(0)
	$('#nav > li > ul').hide();
});
