app.controller('PageController', function ($scope) {
    $scope.page = 1;

    $scope.setPage = function (newValue) {
        $scope.page = newValue;
    };

    $scope.isSet = function (pageName) {
        return $scope.page === pageName;
    };
});