Array.prototype.remove = function(element) {
    let found=false
    for (i = 0; i < this.length; i++) {
        if(element===this[i]){
            let aux=this[0]
            this[0]=this[i]
            this[i]=aux
            found=true
        }
    }
    if(found)
        this.shift()
};