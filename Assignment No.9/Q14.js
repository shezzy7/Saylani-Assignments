
// n) Extract the domain name from a URL string.
function getDomain(){
    let url = "www.google.com";
    let counter=0;
    let domain="";
    for(let i=url.length-1;i>=0;i--){
        if(url.charAt(i)=="."){
            counter++;
            if(counter==2){
                for(let j=i+1;j<url.length;j++){
                    domain+=url.charAt(j);
                }
                break;
            }
        }
    }
    console.log(domain);
}
getDomain();