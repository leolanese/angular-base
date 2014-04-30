/*
 At this point if we were to run this code it would fail since the REST service
 has yet to be implemented. This is where the benefit of the Mockjax Plugin starts to pay off.
 What Mockjax does at this point is replace the $.ajax
 */
$.mockjax({
    url: '/restful/test',
    dataType: 'json',
    responseTime: 2500,
    responseText: {
        success : true
    },
    response: function() {
    }
});


$.getJSON('/restful/test', function(response) {

    if (response.success == 1) {
        var n = response.success;
    } else {
        var n = 'There is a problem with the request';
    }

});
