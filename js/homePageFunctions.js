$(document).ready(function(){
	
	$(".navigationLink").click(function(){
		var page = $(this).attr('page');
		loadPage(page);
	});
	
	loadPage('aboutMe');
});

function loadPage(page)
{
	$.post("../utilities/loadPage.php", {page: page}, function(result){
		$("#pageContent").html(result);
	});
}