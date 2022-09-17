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
     // DeleteAllItem(MyMongoClient);
      // FindOneWithoutCondition(MyMongoClient);
     // FindOneWithCondition(MyMongoClient);
     //FindAllData(MyMongoClient);
     
       FindAllDataByProjection(MyMongoClient);
      // FindAllDataByQuery(MyMongoClient);
      //FindAllDataByLimit(MyMongoClient);
      //FindAllDataBySort(MyMongoClient);

    }

});
 

function InsertData(MyMongoClient){
  var MyDataBase=  MyMongoClient.db("school");

  var MyCollection = MyDataBase.collection('students');

  var MyData={name:"ruhul",Roll:"01", Class:"ten", City:"rajshahi"};





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
            console.log(ResultObj.deletedCount);
        }
    })
    }
   function FindOneWithoutCondition(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');
    var FindObj={}
    MyCollection.findOne(FindObj,function(error,result){
        console.log(result);
    })

   }
   function FindOneWithCondition(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');
    var FindObj={Roll:"02"}
    MyCollection.findOne(FindObj,function(error,result){
        console.log(result);
    })

   }
   function FindAllData(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');

    MyCollection.find().toArray(function(error,result){
        console.log(result)
    })
   }

   function FindAllDataByProjection(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');

    var ItemObj={}
    var ItemProjection={Projection:{Roll:"1"}}

    MyCollection.find(ItemObj,ItemProjection).toArray(function(error,result){
        console.log(result);
    })
   }

   
   function FindAllDataByQuery(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');

    var Query={Roll:"01",City:"rajshahi"}


    MyCollection.find(Query).toArray(function(error,result){
        console.log(result);
    })
   }

   function FindAllDataByLimit(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');


    MyCollection.find().limit(3).toArray(function(error,result){
        console.log(result);
    })
   }
   function FindAllDataBySort(MyMongoClient){
    var MyDataBase=  MyMongoClient.db("school");
    var MyCollection = MyDataBase.collection('students');

    var SortArray={Roll:-1}

    MyCollection.find().sort(SortArray).toArray(function(error,result){
        console.log(result);
    })
   }