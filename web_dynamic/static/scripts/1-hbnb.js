$(function () {
    $('.amenities .popover input').change(function() {
	let id_name = {};
	if(this.checked) {
	    id_name[$(this).attr('data-id')] = $(this).parent().text();
	} else {
	    delete id_name[$(this).attr('data-id')];
	}
	// issue when uncheck box (not removed from h4) how to fix this?
	for (let key in id_name) {
	    $('.amenities h4').append(id_name[key] + ', ');
	}

    })
});
