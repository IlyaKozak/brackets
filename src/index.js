module.exports = function check(str, bracketsConfig) {
    let bracketsSequence = str;
    if (bracketsSequence.length % 2 !== 0) return false;

    const parentheses = "()[]{}||";
    let regExpStr = "";
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (parentheses.includes(bracketsConfig[i][0])) {
            regExpStr +=
                "(\\" +
                bracketsConfig[i][0] +
                "\\" +
                bracketsConfig[i][1] +
                ")";
        } else {
            regExpStr +=
                "(" + bracketsConfig[i][0] + bracketsConfig[i][1] + ")";
        }
        if (i < bracketsConfig.length - 1) regExpStr += "|";
    }

    const re = new RegExp(regExpStr);
    while (re.test(bracketsSequence))
        bracketsSequence = bracketsSequence.replace(re, "");
    return !bracketsSequence;
};
