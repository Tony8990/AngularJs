angular.module('myApp', []).controller('namesCtrl', function ($scope) {
    $scope.names = [
        {name: 'tony', country: 'siracusa'},
        {name: 'marco', country: 'alpignano'},
        {name: 'ester', country: 'priolo'},
        {name: 'fra', country: 'Ciriè'},
        {name: 'Luigi', country: 'saluzzo'},
        {name: 'Simone', country: 'Chivasso'},
    ];
    $scope.orderByMe = function (x) {
        $scope.myOrderBy = x;
    };
    $scope.changeColor = function (x) {
        x.color = 'red';

    }
});