$(function(){
	// $("div.hello").greeting("Good - Bye ~");
	// $("div.hello").colorFul("green");
	$("div.hello").greeting("Good - Bye ~").colorFul("green");
	$( "a" ).showLinkLocationAppend();
	//$( "a" ).showLinkLocation();
	$("div.color").greeting("hello ~").setOption({
		color:"orange",
		backgroundColor:"yellow"
	});
	//$("div.color").greeting("hello ~").setOptions();

	$("div.hilight").hilight();

// $("div.hilight").hilight({
	// 	color:"red"
	// });

	// $("div.hilight").hilight({
	// 	background:"yellow"
	// });

$("div.formart").formartElement();

//$("#buttonDiv").superGallery();

$("#buttonDiv").superGallery({


okBtn:function(){
	alert("123");
}

});


$("div.test").test({
	color:"red"
});

});


