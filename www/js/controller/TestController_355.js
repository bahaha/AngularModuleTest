module.exports= function($scope, $state, TestService){
		console.log('enter controller_355')
		$scope.test = TestService.getTest()
	}
