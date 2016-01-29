var boo=0,a,b,c;
function perform(value)
{
if(boo==0)
{
b=parseInt(value);
a=f1.t1.value;
document.f1.t1.value='';
boo=1;
}
else
{
c=f1.t1.value;
document.f1.t1.value='';
if(b==1)
{
var d=parseFloat(a)+parseFloat(c);
document.f1.t1.value=d;
}
else if(b==2)
{
var d=parseFloat(a)-parseFloat(c);
document.f1.t1.value=d;

}
else if(b==3)
{
var d=parseFloat(a)*parseFloat(c);
document.f1.t1.value=d;
}
else
{
var d=parseFloat(a)/parseFloat(c);
document.f1.t1.value=d;
}
boo=0;
}
}