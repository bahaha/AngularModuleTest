module.exports= function($scope, $state, TestService){
		console.log('enter controller_818')
		$scope.test = TestService.getTest()
	}
