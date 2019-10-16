module.exports = (objects) => {
    let elem = objects[0];
    objects.forEach( obj => {
        Object.keys(obj).forEach( key => {
            if (!(key in elem))
                elem[key] = obj[key];
        });
    });
    return elem;
};
