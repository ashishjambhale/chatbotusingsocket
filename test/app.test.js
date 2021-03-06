var io = require('socket.io-client'),
    assert = require('assert'),
    expect = require('expect.js');
describe('Suite of unit tests', function () {
    var socket;

    beforeEach(function (done) {
        socket = io.connect('http://localhost:3000', {
            'reconnection delay': 0,
            'reopen delay': 0,
            'force new connection': true
        });
        socket.on('connect', function () {
            console.log('worked...');
            done();
        });
        socket.on('disconnect', function () {
            console.log('disconnected...');
        })
    });
    afterEach(function (done) {
        if (socket.connected) {
            console.log('disconnecting...');
            socket.disconnect();
        } else {
            console.log('no connection to break...');
        }
        done();
    });

    describe('First (hopefully useful) test', function () {
        it('Doing something else with indexOf()', function (done) {
            expect([1, 2, 3].indexOf(5)).to.be.equal(-1);
            expect([1, 2, 3].indexOf(0)).to.be.equal(-1);
            done();
        });

    });

});