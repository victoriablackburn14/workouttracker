const request= workoutDB.open("workout", 1);

request.onupgradeneeded= function(event){
 
  const db= event.target.result;
  db.createObjectStore("add exercise", { autoIncrement: true})  
};

request.onsuccess= function(event){
    db= event.target.result;

    if (navigator.onLine){
        checkDatabase();
    }
};

request.onerror= function(event){
    console.log("Error with workout! " + event.target.errorCode);
};

function saveRecord(record){
    const workout= db.workout(["add exercise"], "readwrite");

    const store= workout.objectStore("add exercise");

    store.add(record)
}

function checkDatabase(){
    
}