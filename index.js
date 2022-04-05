function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function named(){
        console.log('stuff');
    }

}

function returnsAnAnonymousFunction(){
    return function(){
        console.log('I am anonymous');
    }
}