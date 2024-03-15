function express() {

}


function tip() {
    console.log(`Don't call me, I'm just an empty shell`);
}
express.prototype.listen = function () {

}
express.prototype.close = function () {

}

express.prototype.use = function () {
    tip();
}
module.exports = express;