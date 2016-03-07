module.exports= function($scope, $state, TestService){
		console.log('enter controller_252')
		$scope.test = TestService.getTest()
	}
