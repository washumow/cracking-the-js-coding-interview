/*
*   An animal shelter that only holds dogs and cats operates strictly in FIFO basis,
*   People must adopt the oldest based on arrival time of all the animals in the shelter
*   The can select whether they prefer a dog or a cat, but cannot select an specific animal
*   Create a data structure that implementes enqueue, dequeueAny, dequeueCat, dequeueDog
*/

function Pet(type){
    this.type = type;
    this.next = null;
    this.turn = -1;
}

function Shelter(){
    this.dogs = null;
    this.cats = null;
    this.index = 0; //we could remove this if we did it date based
}

Shelter.prototype.enqueue = function(pet){
    var list = null;
    pet.turn = this.index++;
    if( pet.type == "cat" ){
        if(!this.cats){
            this.cats = pet;
        }else{
            list = this.cats;
        }
    }else{
        if(!this.dogs){
            this.dogs = pet;
        }else{
            list = this.dogs;
        }
    }

    if(!list)
        return;

    while(list.next){
        list = list.next;
    }
    list.next = pet;
}

Shelter.prototype.dequeueCat = function(){
    if(!this.cats)
        return null;//no cats
    var tmp = this.cats;
    this.cats = this.cats.next;
    if(!this.cats && !this.dogs){
        this.index = 0;
    }
    return tmp;
}

Shelter.prototype.dequeueDog = function(){
    if(!this.dogs)
        return null;//no dogs
    var tmp = this.dogs;
    this.dogs = this.dogs.next;
    if(!this.dogs && !this.cats){
        this.index = 0;
    }
    return tmp;
}

Shelter.prototype.dequeueAny = function(){
    if(!this.cats && !this.dogs)
        return null;
    if(!this.cats)
        return this.dequeueDog();
    if(!this.dogs)
        return this.dequeueCat();
    var type = this.cats.turn < this.dogs.turn ? "cat" : "dog";
    if( type == "cat" )
        return this.dequeueCat();
    return this.dequeueDog();
}


//enqueue O(n) n-> items in queue dequeue functions O(1)
