module.exports= function($scope, $state, TestService){
		console.log('enter controller_288')
		$scope.test = TestService.getTest()
	}
