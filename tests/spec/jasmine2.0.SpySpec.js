// Jasmine allows you to do this with: runs(), waits() and waitsFor() THOSE ALL deprecated on Jasmine 2.0

describe("Asynchronous specs", function() {
    var value;


    beforeEach(function(done) {
        setTimeout(function() {
            value = 0;
            done();
        }, 1);
    });


    it("should support async execution of test preparation and expectations", function(done) {
        value++;
        expect(value).toBeGreaterThan(0);
        done();
    });


    describe("long asynchronous specs", function() {
        var originalTimeout;

        // By default jasmine will wait for 5 seconds for an asynchronous spec to finish before causing at timeout failure
        beforeEach(function() {
            originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
            jasmine.DEFAULT_TIMEOUT_INTERVAL = 7000;
        });

        it("takes a long time than DEFAULT_TIMEOUT_INTERVAL = 5000 ", function(done) {
            setTimeout(function() {
                done();
            }, 6000);
        });

        afterEach(function() {
            jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
        });
    });


});