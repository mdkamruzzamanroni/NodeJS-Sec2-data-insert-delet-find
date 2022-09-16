var Mongoclient= require('mongodb').MongoClient;
var URL="mongodb+srv://ronidemo:cE061097@cluster0.9zb14t6.mongodb.net/?retryWrites=true&w=majority"

Mongoclient.connect(URL,function(error,MyMongoClient){

    if(error){

        console.log("connection fail");
             }

    else{

        console.log("connection success");
        //InsertData(MyMongoClient);
      // DeleteOneItem(MyMongoClient);

      DeleteAllItem(MyMongoClient);


    }

});
 

function InsertData(MyMongoClient){
  var MyDataBase=  MyMongoClient.db("school");

  var MyCollection = MyDataBase.collection('students');

  var MyData={name:"kamruzzaman",Roll:"01", Class:"ten", City:"rajshahi"};

  var MyData={name:"zaman",Roll:"02", Class:"six", City:"rajshahi"};



  MyCollection.insertOne(MyData,function(error){

    if(error){

        console.log("Data Insert Fail")

    }

    else{

        console.log("Data Insert success");


    }

  })

}
function DeleteOneItem(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');

    var DeleteItem= { Roll:"087"}

    MyCollection.deleteOne(DeleteItem,function(error){

        if(error){

            console.log("Data Delete Fail");
                }
    
        else{
    
            console.log("Data Delete success");
           }

    });

}
function DeleteAllItem(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');

    MyCollection.deleteMany(function(error,ResultObj){

        if(error){
            console.log("delete fail");
        }
        else{
            console.log(ResultObj);
        }
    })

   


    }