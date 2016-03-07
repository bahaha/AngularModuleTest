module.exports= function($scope, $state, TestService){
		console.log('enter controller_384')
		$scope.test = TestService.getTest()
	}
