if (!(typeof MochaWeb === 'undefined')){
    MochaWeb.testOnly(function(){
        describe("a group of tests", function(){
            it("should respect equality", function(){
                console.log(EdAccounts);
                chai.assert.equal(5,5);
            });
        });
    });
}
