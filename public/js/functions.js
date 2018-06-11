var app = angular.module('myApp', []);
app.service("callApi",function($http){
    var that = this;
    return{
        "connect" : function(input){
                    return $http(input);        
                }
    }
});
app.controller('numberCtrl', function($scope, callApi) {
    $scope.names = [];
    const init = ()=>{
        callApi.connect({method:'GET',url: "./getData"})
        .success(function(response,d) {
            if(response.status){
                $scope.names = response.data;
            }
            else{
                $scope.msgSucc = false;
                $scope.msgErr = response.msg + ' ' +  JSON.stringify(response.errorDetails);
            }
        })
        .error(function(r,d){
            console.log(r);
            $scope.msgSucc = false;
            $scope.msgErr = response.msg + ' ' +  JSON.stringify(response.errorDetails);
        });
    }
    init();
    $scope.number1 = '';
    $scope.number2 = '';
    $scope.result  = '';
    $scope.msgSucc = false;
    $scope.msgErr = false;
    $scope.submitData = function(){
        if($scope.number1 == "") return false;
        if($scope.number2 == "") return false;
        $scope.temp = $scope.number1.toFixed(2) * $scope.number2.toFixed(2);
        var inputData = {num1:$scope.number1,num2 : $scope.number2,result:$scope.temp};
        callApi.connect({method:'POST',url: "./saveData",data:inputData})
        .success(function(response) {
            if(response.status){
                $scope.msgSucc = response.msg;
                $scope.msgErr = false;
                $scope.result = $scope.temp;
                init();
            }
            else{
                $scope.msgSucc = false;
                $scope.msgErr = response.msg + ' ' +  JSON.stringify(response.errorDetails);
            }
        })
        .error(function(r,d){
            console.log(r);
            $scope.msgSucc = false;
            $scope.msgErr = response.msg;
        });
    }
});
