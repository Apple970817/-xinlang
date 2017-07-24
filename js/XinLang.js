//导航hover
$(".leftNav li").on("mouseenter",function(){
	$(this).find("div").show()
})
$(".leftNav li").on("mouseleave",function(){
	$(this).find("div").hide()
})
//选项
   //全选
$('#quanx').click(function(){
	var ass = this.checked;
$('input[name="rr"]').prop('checked',ass);
})
  //反选
$('#fanx').click(function(){
	$('input[name="rr"]').each(function(){
		if (this.checked) {
			$(this).prop('checked',false)
		} else{
			$(this).prop('checked',true)
		}
	})
})
  //全不选
$('#quanbux').click(function(){	
	$('input[name="rr"]').prop('checked',false)
})

//切换
    //教育  培训  招生 出国
$(function(){
	$('#lef li div').mouseover(function(){
		$('#lef li div').removeClass('active');
		$('.smList .item').removeClass('show');
		$(this).addClass('active');
		$('.smList .item').eq($(this).index()).addClass('show');
	})
})
   //图文
$(function(){
	$('.comTitle_tabs li').mouseover(function(){
		$('.comTitle_tabs li').removeClass('active');
		$('.videoList_newList').removeClass('show');
		$(this).addClass('active');
		$('.videoList_newList').eq($(this).index()).addClass('show');
	})
})
   //游戏  应用中心
$(function(){
	$('.contNav_item').mouseover(function(){
		$('.contNav_item').removeClass('active');
		$('.videoList_newList').removeClass('show');
		$(this).addClass('active');
		$('.videoList_newList').eq($(this).index()).addClass('show');
	})
})
   //今日  明日
$(function(){
	$('.day a').hover(function(){
		$('.day a').removeClass('active');
		$('.tabs_item').removeClass('show');
		$(this).addClass('active');
		$('.tabs_item').eq($(this).index()).addClass('show');
	})
})











