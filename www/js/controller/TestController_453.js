module.exports= function($scope, $state, TestService){
		console.log('enter controller_453')
		$scope.test = TestService.getTest()
	}
