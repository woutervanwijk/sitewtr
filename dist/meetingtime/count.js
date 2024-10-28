// ==ClosureCompiler==
// @output_file_name default.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// ==/ClosureCompiler==

//Meeting Costs (c) WvW 2011
var wageCounter;
//var timeCounter;
var on = false;
var refresh = false;
var timestarted;	
var pausetime;
var mspaused = 0;
var pace = 0;
var oldflipval = 0;
var oldms = 0;
var oldwidth = 0;
var latesttime;
var dot = false;
var zoom = false;
var oldwrptop;

jQuery.fn.center = function () {
//    this.css("position","absolute");
//   orig:  this.css("top", (($(window).height() - this.outerHeight()) / 2) + $(window).scrollTop() + "px");

            if(zoom) {
		this.css("left", "10px");
		var width = ($(window).width() - (this.width() / 1.6 ) ) / 2;
            } else {
                var width =  ($(window).width()/2) - (this.outerWidth() / 2);
            }
    if (width < 0) { width = 0; }
    width += "px";
    this.css("left", width );
    return this;
}

jQuery.fn.center2 = function () {
    this.css("position","absolute");
    var height = ($(window).height() / 2) - (this.height() / 2);
    if (height < 0) { height = 0; }
    height += "px";
    var width = ($(window).width()/2) - (this.width() / 2);
    if (width < 0) { width = 0; }
    width += "px";

    this.css("top", height);
    this.css("left", width );
    return this;
}


$(window).resize(function() {
	$("#wrapper").center();
});


function addCommas(nStr)
{
	var adot = '.';
	var acom = ',';
	if(dot) {
		adot = ',';
		acom = '.';
	}
	
	nStr += '';
	x = nStr.split(adot);
	x1 = x[0];
	x2 = x.length > 1 ? adot + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + acom + '$2');
	}
	return x1 + x2;
}

function counterUpdated(value) {
	if( (value==0) || (value==10) || (value==100) || (value==1000) || (value==10000) || (value==100000) || (value==1000000)) {
		$("#wrapper").center();	
	}

	//if ((value > 9999)  && !zoom) {
	if ((value > 9999) && (window.innerWidth < 400) && !zoom) {
		zoomFlp(true);
	};

}

function zoomFlp (val) {
	if(val) {
	//	alert(	$("#wrapper").width());
		$('#wrapper').css('zoom', 0.66);
		$('#timegrid').css('margin-top', 65);
		$('.bigsign').css('zoom', 0.99999);
	//	alert(	$("#wrapper").width());
	} else {
		$('#wrapper').css('zoom', 1);
		$('.bigsign').css('zoom', 1);
		$('#timegrid').css('margin-top', 102);
	}
	zoom = val;
	$("#wrapper").center();
}

function loc () {
	if ( navigator ) {
		if ( navigator.language ) {
			return navigator.language;
		}
		else if ( navigator.browserLanguage ) {
			return navigator.browserLanguage;
		}
		else if ( navigator.systemLanguage ) {
			return navigator.systemLanguage;
		}
		else if ( navigator.userLanguage ) {
			return navigator.userLanguage;
		}
	}
}


function secondsToHms(d) {
    d = Number(d);
		var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);
    return ((h > 0 ? h + ":" : "") + (m > 0 ? (h > 0 && m < 10 ? "0" : "") + m + ":" : "0:") + (s < 10 ? "0" : "") + s);
}	
		
function getTime(d) {
	if (!d) {
		d = new Date();
	}

	var curr_min = d.getMinutes();
	curr_min = curr_min + "";
	if (curr_min.length == 1)
		{   curr_min = "0" + curr_min; }
	var curr_sec = d.getSeconds();
	curr_sec = curr_sec + "";
	if (curr_sec.length == 1)
		{   curr_sec = "0" + curr_sec; }
	
	var time = d.getHours() + ':' + curr_min + ':' + curr_sec;
	return time; //(time + d.toLocaleTimeString().substr(d.toLocaleTimeString().lastIndexOf(" ")));
}		

//count digits
function digits(n) { return 1+Math.floor(Math.log(n)/Math.log(10));}

//timer function to update counter and time etc
function updateTime() {
	var time = new Date();
	var flp = wageCounter.getValue();
	$('#time').text(getTime(time));
	if (on) {
		if( flp>=10000000) {
			stop();
			alert('This was an expensive meeting! Resetting counter. Sorry.');
			reset();
		}

		//set time meetig elapsed 
		var mselapsed = time.getTime() - timestarted.getTime();
		var lastms = time.getTime() - latesttime.getTime();
		var ms = Math.round( (mselapsed - mspaused ) / 1000);
		var newwidth = $("#wrapper").width();
		if (newwidth != oldwidth) {
			$("#wrapper").center();
		}
		//check if counter is still if more than 750 ms have elapsed since the last update
		if ( lastms > (oldms + 750) ) {
			wageCounter.setAuto(false).stop();
			wageCounter.setValue( Math.round(oldflipval + (lastms / pace)) );
			wageCounter.setAuto(true);
			$("#wrapper").center();
//			$('#timestarted').html( Math.round(oldflipval + (lastms / pace)) );
		} 
			//do not go beyond 10.000.000 value. thats stupid
		oldms = ms;
		var diff = secondsToHms( ms );
		$('#timeelapsed').text( diff );
	}
	oldflipval = flp;
	latesttime = time;
	oldwidth = newwidth;
}

function initTime() {
	timestarted =  new Date();
	pausetime =  timestarted;
	$('#timestarted').text( getTime(timestarted) );
	updateTime();
}
		
function start() {
			wageCounter.setAuto(true);
			var tmptime =  new Date();
			//init elapsed timer 
			if((mspaused == 0) && (pausetime == timestarted)) {
				initTime();
			}
			mspaused += tmptime.getTime() - pausetime.getTime();
			$("#pausebt .ui-btn-text").text('Pause');
			resumetime = tmptime;
			on = true;
}
		
function stop() {
			wageCounter.setAuto(false).stop();
			on = false;
			pausetime = new Date();
			$("#pausebt .ui-btn-text").text('Go');
};

function setflips() {
			var rate = $("#ratesl").val()
			pace = 3600000 / ( rate );
			var burn = Math.round( pace / 100 ) / 10;
			if(dot) {
				var burn = burn.toString().replace(/\./g, ',');
			}
			$("#txtrate").html(addCommas(rate));
			$("#txtburn").html( burn );
			wageCounter.setAuto(false).stop();
			wageCounter.setPace(pace);
			if(on) {
				wageCounter.setAuto(true);
			}
			
			//reset resumetime
			resumetime = new Date();
			oldflipval = wageCounter.getValue();
}

function changerate() {
	if (!refresh) {$("#ratesl").val($("#peoplesl").val() * $("#wagesl").val()).slider('refresh');}
}

function changesign() {
	var tmp = $("#selsign").val();
	
	//set dot as separator
	// &euro; doesnt work
	if (tmp.charCodeAt(0) == 8364) {
		wageCounter.setDot(true)
		dot = true;
	} else {
		wageCounter.setDot(false)
		dot = false;
	}
	$(".sign").html(tmp);
//	$("#timeelapsed").text(tmp.length + ' ' + tmp.charCodeAt(0));
}

function savesliders() {
	$.cookie('people', $("#peoplesl").val() , { expires: 365});	
	$.cookie('wage', $("#wagesl").val() , { expires: 365});	
	$.cookie('rate', $("#ratesl").val() , { expires: 365});		
	$.cookie('sign', $("#selsign").val() , { expires: 365});		
}

function pause() {
			if (on) {
				stop();
			} else { 
				start();
			}
};

function reset() {
	timestarted =  0;
	pausetime =  timestarted;
	mspaused = 0;
	wageCounter.setAuto(false).stop();
	wageCounter.setValue(0);
	zoomFlp(false);
	if (on) { wageCounter.setAuto(true); }
	$("#timeelapsed").html('0:00');
	if (on) {
		initTime();
	} else {
		$("#timestarted").html('0:00:00');
	}
}

function loadsliders () {
		//get cookies
		var wage = $.cookie('wage');
		var people = $.cookie('people');
		var rate = $.cookie('rate');
		var sign = $.cookie('sign');

		//set defaults if no cookies
		if(!$.cookie('wage')) {
			wage = 25;
			people = 10;
			rate = 250;
			sign = '&dollar;';
		}

		//set sliders
		$("#wagesl").val(wage);
		$("#peoplesl").val(people);
		$("#ratesl").val(rate);
		$("#selsign").val(sign);
		changesign();
}

function fsCounter(event){
		if($("#divbt").is(':visible')) {
			oldwrptop = $("#wrapper").css("top");
			$(".onlyflip").hide();
			$( '#wrapper' ).center2();
//			$( '#wrapper' ).css('position', '');
		} else {
			$(".onlyflip").show();
//			$( '#fullscreen' ).css('position', '');
			$("#wrapper").css("top", oldwrptop);
			$("#wrapper").center();
		}
}
function fsgrid(event){
		if($("#divbt").is(':visible')) {
//			oldwrptop = $("#wrapper").css("top");
			$(".nofullscreen").hide();			
			$( '#fullscreen' ).center2();
		} else {
			$(".nofullscreen").show();
//			$( '#fullscreen' ).css('margin-top', '100px');
			$( '#fullscreen' ).css('position', '');
			//$("#wrapper").css("top", oldwrptop);
//			$("#wrapper").center();
		}
}
	
$(document).ready(function(){	

	$( '#home' ).live( 'pageinit',function(event){
		loadsliders();
		updateTime();
		changesign();
	});

	$( '#settings' ).live( 'pageinit',function(event){
		loadsliders();
		$("#wrapper").center();
	});


	$( '#settings' ).live( 'pagebeforeshow',function(event){
		//refresh sliders
		refresh = true;
		$("#wagesl").slider('refresh');
		$("#peoplesl").slider('refresh');
		$("#ratesl").slider('refresh');
		$("#selsign").selectmenu('refresh');
		refresh = false;
	});

	$( '#home' ).live( 'pagebeforeshow',function(event){
		setflips();
		changesign();
		if (!$.cookie('wage')) {
			savesliders();
			//show welcome screen
			$.mobile.changePage('#welcome');
		}
		//for some kind of strange margin error
	});

	$( '#home' ).live( 'pageshow',function(event){
//		$('#wrapper').width($(document).width());
		$("#wrapper").center();
	});


	$( '#wrapper' ).click(fsCounter);
	
	$( '#timegrid' ).click(fsCounter);


	// Initialize a new counter
	wageCounter = new flipCounter('wagefl', {value: 0, inc:1, pace:1000, auto:false, dot: false});
	wageCounter.setUpdateCallback(counterUpdated);

	reset();
	$( '#wrapper' ).css('position', 'absolute');
	$( '#wrapper' ).resize(function(event){
		$("#wrapper").center();
	});

	setInterval("updateTime()", 500);
	
});
