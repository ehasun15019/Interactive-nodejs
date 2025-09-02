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

3.  Module ka "export" korar pore onno file/module a use korte caile **\*** require("./") **\*** avbae korte hoi

4.  Module has 3 type

    Example:
    a. build-in-modules
    b. local modules
    c. Third Party Modules

5.  kono package ka uninstall korte ciale

    Example:
    npm uninstall "package Name"

6.  package ar sob list dekte caile

    Example:
    npm list

7.  kono package ka update korte caile

    Example:
    npm update

8.  ------- server a lage na kinto development ar somoi lage amon kiso tool jake bole "devDependencies" ------

    Example:
    npm install nodemon -D

9.  nodemon run korate caile

    Example:
    npx nodemon app.js

10. suppose amra "package.json" file ar "script" ar modde default file ta run korate cai ......

Example:
in script
"dev": "npx nodemon app.js"

abar amder \***\* npm run dev \*\*\*\*** dilei command colbe

11. Important,,,,,
    "exports", "require", "module", "\_filename", "\_directoryName"

agola mone hoi global object ar part kinto asole agola global object ar part noi .

agola module_wraper_function teke ase.


12. REPL -> Read-Eval-Print-Loop
