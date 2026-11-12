
    function validWordAbbreviation(word, abbr) {
        let i = 0;
        let j = 0;
        let m = word.length;
        let n = abbr.length;
        while (i < m && j < n) {
            if (word[i] === abbr[j]) {
                i++;
                j++;
            } else if (abbr[j] >= "0" && abbr[j] <= "9") {
                if (abbr[j] === "0") {
                    return false;
                }
                let count = 0;
                while (j < n && abbr[j] >= "0" && abbr[j] <= "9") {
                    count = count * 10 + Number(abbr[j]);
                    j++;
                }
                i += count;
            } else {
                return false;
            }
        }

        return i === m && j === n;
    }



let word = "apple", abbr = "a3e"

console.log(validWordAbbreviation(word,abbr));
