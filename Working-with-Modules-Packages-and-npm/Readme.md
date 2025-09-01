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

3. Module ka "export" korar pore onno file/module a use korte caile *****  require("./")  ***** avbae korte hoi 


4. Module has 3 type 

   Example: 
        a. build-in-modules
        b. local modules
        c. Third Party Modules

