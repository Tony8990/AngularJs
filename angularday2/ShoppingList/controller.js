var app = angular.module("myShoppingList", []);
app.controller("myCtrl", function ($scope) {
    $scope.products = ["Latte", "Uova", "Pane"];
    $scope.addItem = function () {
        $scope.errortext = "";
        if (!$scope.addMe) {
            return;
        }
        if ($scope.products.indexOf($scope.addMe) == -1) {
            $scope.products.push($scope.addMe);
        } else {
            $scope.errortext = "La merce è già presente nella lista";
        }
    };
    $scope.removeItem = function (x) {
        $scope.errortext = "";
        $scope.products.splice(x, 1);
    }
});