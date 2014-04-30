describe("getTweets", function () {

    it('spy to be called invoke callback', function(){

        var xhr = sinon.useFakeXMLHttpRequest();
        var requests = sinon.requests = [];

        xhr.onCreate = function (request) {
            requests.push(request);
        };

        var callback = sinon.spy();

        $.ajax('/some/article', { success: callback });

        // alert(sinon.requests.length);

       // expect(sinon.requests.length).toBe('1');

       //  expect(sinon.requests[0].url, "/some/article");

        expect(callback).toHaveBeenCalled;

    })


    it("should $.ajax &amp; invoke callback", function (done) {

        var message = 'an example message';
        var error = 'an example error message';
        var stub = sinon.stub();
        var spy1 = sinon.spy();
        var spy2 = sinon.spy();

        var callback = sinon.spy();

        expect(callback).toHaveBeenCalled;
    });

});