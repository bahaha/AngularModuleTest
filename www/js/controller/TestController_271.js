module.exports= function($scope, $state, TestService){
		console.log('enter controller_271')
		$scope.test = TestService.getTest()
	}
