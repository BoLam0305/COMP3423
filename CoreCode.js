var MIN = 1;
var MAXINDEX = 10;
var MAXTABLE = 10;
var STEP = 1;

var i;
var j;
for (j = MIN; j <= MAXTABLE; j += STEP) {
    for (i = MIN; i <= MAXINDEX; i += STEP) {
        console.log(
            String(i).padStart(3, " ") +
            ' * ' +
            String(j).padStart(3, " ")+
            ' = ' +
            String(i*j).padStart(3, " ")
        );

    }
    console.log('\n---------------\n');
}


