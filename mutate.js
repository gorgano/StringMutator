"use strict";


let start = "cat";
let end = "dog";
let dict = ['cat', 'cot', 'cog', 'dog'];

mutate(start, end, dict);

function mutate(strStart, strEnd, arrDictionary) {
    //Loop over each item in the dictionary and see if it is one letter different than current
    let strCurrent = strStart;

    arrDictionary.forEach(function (strWord) {
        //Find the charactrs that are different.
        arrDiff = findArrayDiff(strCurrent, strWord);

        //Difference found, but only one character is different
        if (arrDiff.length > 0 && arrDiff.length < 2) {
            //Get the different character defintion
            let o = arrDiff[0];

            //swap out character
            arrCurrent = strCurrent.split();
            arrCurrent[o.intPosition] = o.strValueTwo;

            strCurrent = arrCurrent.toString(); //convert back to string

            print(strStart + " => " + strCurrent);
        }
    });
}

function findArrayDiff(aOne, aTwo) {
    let arrDifferences = [];

    for (let u = 0; u < aOne.length; ++u) {
        if (aOne[u] !== aTwo[u]) {
            arrDifferences.push({ "intPosition": u, "strValueOne": aOne[u], "strValueTwo": aTwo[u] });
        }
    }

    return arrDifferences;
}



