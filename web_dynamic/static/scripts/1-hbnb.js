$(function () {
    let id_name = {};
    $('.amenities .popover input').change(function() {
	if(this.checked) {
	    id_name[$(this).attr('data-id')] = $(this).parent().text();
	} else {
	    delete id_name[$(this).attr('data-id')];
	}
	$('.amenities h4').text("");
	let count = 0;
	for (let key in id_name) {
	    count += 1;
	    if (count < 4) {
		$('.amenities h4').append(id_name[key] + ', ');
	    } else if (count === 4){
		$('.amenities h4').append('...');
	    }
	}
    });
});
