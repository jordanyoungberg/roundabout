app.controller('PageController', function ($scope) {
    $scope.page = 1;

    $scope.setPage = function (newValue) {
        $scope.page = newValue;
    };

    $scope.isSet = function (pageName) {
        return $scope.page === pageName;
    };
    
    $scope.text = "";
    $scope.tempText = "";
    $scope.nnCount = 0;
    $scope.pnCount = 0;
    $scope.vrbCount = 0;
    $scope.advCount = 0;
    $scope.adjCount = 0;
    
    $scope.getCount = function() {
        return $scope.nnList;
    };
    
    $scope.nnList = [];
    $scope.pnList = [];
    $scope.vrbList = [];
    $scope.advList = [];
    $scope.adjList = [];
    
    $scope.newObj = {};
    
    $scope.textEdit = function (newText) {
        $scope.tempText = newText;
    };
    
    $scope.typeCount = function () {
        $scope.keyNN = /NN/g;
        $scope.keyPN = /PN/g;
        $scope.keyVRB = /VRB/g;
        $scope.keyADV = /ADV/g;
        $scope.keyADJ = /ADJ/g;
        
        if($scope.text.match($scope.keyNN) == undefined) {
            $scope.nnList = [];
        } else {
            $scope.nnCount = $scope.text.match($scope.keyNN).length;
            for (var i = 0; i < $scope.nnCount; i++) {
                $scope.newObj = {num: i, word: ""};
                $scope.nnList.push($scope.newObj);
            }
        }
        
        if($scope.text.match($scope.keyPN) == undefined) {
            $scope.pnList = [];
        } else {
            $scope.pnCount = $scope.text.match($scope.keyPN).length;
            for (var i = 0; i < $scope.pnCount; i++) {
                $scope.newObj = {num: i, word: ""};
                $scope.pnList.push($scope.newObj);
            }
        }
        
        if($scope.text.match($scope.keyVRB) == undefined) {
            $scope.vrbList = [];
        } else {
            $scope.vrbCount = $scope.text.match($scope.keyVRB).length;
            for (var i = 0; i < $scope.vrbCount; i++) {
                $scope.newObj = {num: i, word: ""};
                $scope.vrbList.push($scope.newObj);
            }
        }
        
        if($scope.text.match($scope.keyADV) == undefined) {
            $scope.advList = [];
        } else {
            $scope.advCount = $scope.text.match($scope.keyADV).length;
            for (var i = 0; i < $scope.advCount; i++) {
                $scope.newObj = {num: i, word: ""};
                $scope.advList.push($scope.newObj);
            }
        }
        
        if($scope.text.match($scope.keyADJ) == undefined) {
            $scope.adjList = [];
        } else {
            $scope.adjCount = $scope.text.match($scope.keyADJ).length;
            for (var i = 0; i < $scope.adjCount; i++) {
                $scope.newObj = {num: i, word: ""};
                $scope.adjList.push($scope.newObj);
            }
        }
    };
    
    $scope.swap = function() {
        $scope.NNkey = /NN/;
        $scope.PNkey = /PN/;
        $scope.VRBkey = /VRB/;
        $scope.ADVkey = /ADV/;
        $scope.ADJkey = /ADJ/;
        var i = 0;
        while ($scope.NNkey.test($scope.text)) {
            $scope.text = $scope.text.replace($scope.NNkey, $scope.nnList[i].word);
            i += 1;
        }
        i = 0;
        while ($scope.PNkey.test($scope.text)) {
            $scope.text = $scope.text.replace($scope.PNkey, $scope.pnList[i].word);
            i += 1;
        }
        i = 0;
        while ($scope.VRBkey.test($scope.text)) {
            $scope.text = $scope.text.replace($scope.VRBkey, $scope.vrbList[i].word);
            i += 1;
        }
        i = 0;
        while ($scope.ADVkey.test($scope.text)) {
            $scope.text = $scope.text.replace($scope.ADVkey, $scope.advList[i].word);
            i += 1;
        }
        i = 0;
        while ($scope.ADJkey.test($scope.text)) {
            $scope.text = $scope.text.replace($scope.ADJkey, $scope.adjList[i].word);
            i += 1;
        }
    }
    
    $scope.reset = function() {
        $scope.nnCount = 0;
        $scope.pnCount = 0;
        $scope.vrbCount = 0;
        $scope.advCount = 0;
        $scope.adjCount = 0;
        
        $scope.nnList = [];
        $scope.pnList = [];
        $scope.vrbList = [];
        $scope.advList = [];
        $scope.adjList = [];
        
        $scope.text = "";
        $scope.tempText = "";
    }
    
    $scope.stepBack = function() {
        $scope.text = $scope.tempText;
    }
});