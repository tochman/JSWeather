describe('JSWeather', function() {

    beforeEach(function() {
        document.cookie = 'temperature' + '=; Max-Age=0'
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
    });

    afterEach(function () {
        document.cookie = 'temperature' + '=; Max-Age=0'
    });

    it('displays thermostat default temperature', function(){
        expect('#current').toContainText('20');
    });

    it('up button increases temperature', function(){
        $("#increase").click();
        expect('#current').toContainText('21');
    });

    it('down button decreases temperature', function(){
        $("#decrease").click();
        expect('#current').toContainText('19');
    });


});