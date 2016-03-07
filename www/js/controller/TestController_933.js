module.exports= function($scope, $state, TestService){
		console.log('enter controller_933')
		$scope.test = TestService.getTest()
	}
