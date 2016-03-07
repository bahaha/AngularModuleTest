module.exports= function($scope, $state, TestService){
		console.log('enter controller_205')
		$scope.test = TestService.getTest()
	}
