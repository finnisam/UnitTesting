main
class fraction
{
    constructor( num , den )
    {
        this.num = num;
        this.den = den;
    }

}

function gcd(a,b)
{
    var gcd=1;
    for(let i=2;(i<=a&&i<=b);i++)
    {
        if(a%i==0&&b%i==0)
        {
            gcd=i;
        }
    }
    return gcd;
}
