module.exports= function($scope, $state, TestService){
		console.log('enter controller_338')
		$scope.test = TestService.getTest()
	}
