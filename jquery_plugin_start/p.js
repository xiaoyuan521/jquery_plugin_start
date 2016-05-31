$.fn.greeting = function(message){
	this.text(message);
	return this;
}

$.fn.colorFul = function(colorStr){
	this.css("color", colorStr);
	return this;
}

$.fn.showLinkLocation = function() {

	this.filter( "a" ).each(function() {
		var link = $( this );
		link.append( " (" + link.attr( "href" ) + ")" );
	});

	return this;

};

$.fn.showLinkLocationAppend = function() {

	this.filter( "a" ).append(function() {
		return " (" + this.href + ")";
	});

	return this;

};

(

	function($){

		$.fn.setOption =function (options){

			var blue="blue"
			var settings  =$.extend({
				color:blue,
				backgroundColor:"white"
			},options);

			return this.css({
				color:settings.color,
				backgroundColor:settings.backgroundColor
			});
		};

	}(jQuery));


$.fn.setOptions =function(){
	this.css({
		color:"green"
	});
	return this;
};


// Plugin definition.
$.fn.hilight = function( options ) {

    // Extend our default options with those provided.
    // Note that the first argument to extend is an empty
    // object – this is to keep from overriding our "defaults" object.
    var opts = $.extend( {}, $.fn.hilight.defaults, options );

    // Our plugin implementation code goes here.

    return this.css({
    	foreground:opts.foreground,
    	background:opts.background,
    	color:opts.color

    });

};

// Plugin defaults – added as a property on our plugin function.
$.fn.hilight.defaults = {
	foreground: "red",
	background: "green"
};


//$.fn.hilight.defaults.background = "blue";

$.fn.formartElement =function(options){


	return this.each(
		function(){

			var elem = $(this);
			var markup =elem.html();
			markup	= $.fn.hilight.format( markup );
			elem.html( markup );

		}

		)
}

$.fn.hilight.format =function(text){

	return "<strong>" + text + "</strong>";

}


$.fn.superGallery = function (options){

	var defaults ={

		okBtn:function (){
			alert("点击ok button");
		}
	}
		var settings =$.extend({},defaults,options);
		return this.each(function(){
			$(this).find("button").on("click",settings.okBtn);
		})

	}


	$.fn.test =function(options){


		var test1 =$.extend({

			color:"blue"

		},options);
		return this.css({
			color:test1.color
		});

	} 







	