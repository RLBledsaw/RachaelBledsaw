$(document).ready(function(){
	$('#submit').click(function(event){
		var firstName = $('#first_name').val();
		var lastName = $('#last_name').val();
		var email = $('#email').val();
		var contact = $('#contact').val();
		var newUser = "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + email + "</td><td>" + contact + "</td></tr>";
			//$('tr').children().append(newUser);
			$('tbody').append(newUser);
		return false;
	});
	$('#formreset').click(function(){
		$('#formreset')[0].reset();
	});
});
	
