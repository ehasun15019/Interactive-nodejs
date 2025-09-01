1.  node.js a prottek ta file akta kore module

2.  kono module ka kivabe export kora jai

    Example:

    function getArea() {
        return Math.PI;
    }

    module.exports = {
        getArea: getArea,
    };

    console.log(module.exports);
