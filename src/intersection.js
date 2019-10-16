Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};


module.exports = (array1,array2) => array1.filter( (el) => array2.includes(el));
    