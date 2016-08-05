/**
Template Controllers

@module Templates
*/

var searchBlock = web3.eth.blockNumber;

/**
The header template

@class [template] views_history
@constructor
*/

Template['views_history'].onCreated(function(){
    var template = this;
});



Template['views_history'].helpers({
	 /*Formats the last difficulty

    @method (difficulty)
    @return {String}
    */
    'difficulty': function() {
        return web3.eth.getBlock(searchBlock).difficulty;
    },
    /*Formats the last extraData

    @method (extraData)
    @return {String}
    */
    'extraData': function() {
        return web3.eth.getBlock(searchBlock).extraData;
    },
    /*Formats the last gasLimit

    @method (gasLimit)
    @return {String}
    */
    'gasLimit': function() {
        return web3.eth.getBlock(searchBlock).gasLimit;
    },
    /*Formats the last gasUsed

    @method (gasUsed)
    @return {String}
    */
    'gasUsed': function() {
        return web3.eth.getBlock(searchBlock).gasUsed;
    },
    /*Formats the last hash

    @method (hash)
    @return {String}
    */
    'hash': function() {
        return web3.eth.getBlock(searchBlock).hash;
    },
    /*Formats the last logsBloom

    @method (logsBloom)
    @return {String}
    */
    'logsBloom': function() {
        return numeral(web3.eth.getBlock(searchBlock).logsBloom).format('0,0');
    },
    /*Formats the last miner

    @method (miner)
    @return {String}
    */
    'miner': function() {
        return web3.eth.getBlock(searchBlock).miner;
    },
    /*Formats the last mint

    @method (mint)
    @return {String}
    */
    'mint': function() {
        return web3.eth.getBlock(searchBlock).mint;
    },
    /*Formats the last nonce

    @method (nonce)
    @return {String}
    */
    'nonce': function() {
        return web3.eth.getBlock(searchBlock).nonce;
    },
    /*Formats the last block number

    @method (number)
    @return {String}
    */
    'number': function() {
        return web3.eth.getBlock(searchBlock).number;
    },
    /*Formats the last parentHash

    @method (parentHash)
    @return {String}
    */
    'parentHash': function() {
        return web3.eth.getBlock(searchBlock).parentHash;
    },
    /*Formats the last receiptRoot

    @method (receiptRoot)
    @return {String}
    */
    'receiptRoot': function() {
        return web3.eth.getBlock(searchBlock).receiptRoot;
    },
    /*Formats the last sha3Uncles

    @method (sha3Uncles)
    @return {String}
    */
    'sha3Uncles': function() {
        return web3.eth.getBlock(searchBlock).sha3Uncles;
    },
    /*Formats the last size

    @method (size)
    @return {String}
    */
    'size': function() {
        return web3.eth.getBlock(searchBlock).size;
    },
    /*Formats the last stateRoot

    @method (stateRoot)
    @return {String}
    */
    'stateRoot': function() {
        return web3.eth.getBlock(searchBlock).stateRoot;
    },
    /*Formats the last timestamp

    @method (timestamp)
    @return {String}
    */
    'timestamp': function() {
        return web3.eth.getBlock(searchBlock).timestamp;
    },
    /*Formats the last totalDifficulty

    @method (totalDifficulty)
    @return {String}
    */
    'totalDifficulty': function() {
        return web3.eth.getBlock(searchBlock).totalDifficulty;
    },
    /*Formats the last transactions

    @method (transactions)
    @return {String}
    */
    'transactions': function() {
        return web3.eth.getBlock(searchBlock).transactions.length;
    },
    /*Formats the last transactionsRoot

    @method (transactionsRoot)
    @return {String}
    */
    'transactionsRoot': function() {
        return web3.eth.getBlock(searchBlock).transactionsRoot;
    },
    /*Formats the last uncles

    @method (uncles)
    @return {String}
    */
    'uncles': function() {
        return web3.eth.getBlock(searchBlock).uncles.length;
    },
    /*Formats the processRequest

    @method (processRequest)
    @return {String}
    */
    'processRequest': function() {
    	//is equal too or less then current block number
    	//get block number	      
    }
});

/// End

