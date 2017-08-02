/**
 * Created by lwj_312 on 17-7-21.
 */
function theCharOccurTimes(sting,char) {
    let times=0;
    for(let a of sting){
        if(a==char) times++;
    }
    return times;
}

console.log(theCharOccurTimes('abeettaddaljknljgmng','a'));