
$('#formy').submit(function(e){

	e.preventDefault();

	$('#texty').text($("#field").val());

	$('#formy').remove();

});

$('#field').focus()