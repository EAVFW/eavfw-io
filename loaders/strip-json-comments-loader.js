module.exports = function (source, map, meta) {

    this.cacheable && this.cacheable();

    var callback = this.async();



    import('strip-json-comments').then(stripper => {
        console.log(stripper);
        callback(null, stripper.default(source), map, meta);
    }).catch((err) => callback(err));


};
