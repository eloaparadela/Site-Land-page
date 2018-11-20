$(document).on('click', 'button.next', function(e){
	
	e.preventDefault();
	
	if(!$(e.target).is(":disabled")){	
		var btnTarget = $(e.target).parents(".form-section").next(".form-section")

		$(".form-section").not(btnTarget).slideUp(350, function(){
			$(btnTarget).slideDown(350);
		});
	}

	
});
$(document).on('click', 'button.prev', function(e){
	
	e.preventDefault();
	
	if(!$(e.target).is(":disabled")){	
		var btnTarget = $(e.target).parents(".form-section").prev(".form-section")

		$(".form-section").not(btnTarget).slideUp(350, function(){
			$(btnTarget).slideDown(350);
		});
	}

	
});

$(".form-section").keyup( function(){
	
	$(this).find(".input").each( function(i){
		
		if(!$(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", false);
			$(this).parents(".form-section").find("button.fin").prop("disabled", false);
		}else if($(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", true);
			$(this).parents(".form-section").find("button.fin").prop("disabled", true);
		}
		
	});
	
		
	$(this).find("input[type='file']").on('change', function(e){
	
		
		if(!$(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", false);
			$(this).parents(".form-section").find("button.fin").prop("disabled", false);
			console.log("false");
		}else if($(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", true);
			$(this).parents(".form-section").find("button.fin").prop("disabled", true);
			console.log("true");
		}
	});
		
	
});
$(".form-section").each( function(){
	
	$(this).find(".input").each( function(i){
		
		if(!$(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", false);
			$(this).parents(".form-section").find("button.fin").prop("disabled", false);
		}else if($(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", true);
			$(this).parents(".form-section").find("button.fin").prop("disabled", true);
		}
		
	});
	
		
	$(this).find("input[type='file']").on('change', function(e){
		
		if(!$(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", false);
			$(this).parents(".form-section").find("button.fin").prop("disabled", false);
			$("label[for='"+ $(this).attr("id") + "']").addClass("active")
		}else if($(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", true);
			$(this).parents(".form-section").find("button.fin").prop("disabled", true);
		}
    });
    

    $(this).find(".input").each( function(i){
		
		if(!$(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", false);
			$(this).parents(".form-section").find("button.fin").prop("disabled", false);
		}else if($(this).val().length == 0){
			$(this).parents(".form-section").find("button.next").prop("disabled", true);
			$(this).parents(".form-section").find("button.fin").prop("disabled", true);
		}
		
	});
		
	
});

$(document).on('click', 'button.fin', function(e){
	e.preventDefault();
	$(e.target).parents(".wrapper").slideUp(350);
	
	setTimeout( function(){
		$(e.target).parents("form").submit();
	}, 350);
	
	
});
