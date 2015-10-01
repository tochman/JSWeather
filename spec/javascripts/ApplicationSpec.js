describe('JSWeather', function() {

    beforeEach(function() {
        document.cookie = 'temperature' + '=; Max-Age=0'
        //jasmine.getFixtures().fixturesPath = './lib/views/';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    afterEach(function () {
        document.cookie = 'temperature' + '=; Max-Age=0'
    });

	it('it sets the correct city value when selected from the drop-down menu', function () {
		$('#current_city').each(function () {
		    $(this).val("Boulder,us").change();
	    });
		//debugger;
	    expect($('#city').html()).toEqual("Boulder");
	});


});