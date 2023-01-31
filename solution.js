//Q1. set(1,2,3,4)
//Q2. "ref"
//Q3. {[1,2,3]=> true, [1,2,3] => false}



//hasDuplicate
function hasDuplicate(arr)
{
    return new Set(arr).size != arr.length
}


//vowelCount
const vowelSet = new Set([...'aeiou'])
function vowelCount(arr)
{
    return [...arr].reduce((map, char)=>
    {
        if(vowelSet.has(char))
        {
            if(map.has(char))
            {
                map.set(char,map.get(char)+1);
            }
            else
            {
                map.set(char,1);
            }
        }
        return map;
    },new Map())
}