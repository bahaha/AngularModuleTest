module.exports= function($scope, $state, TestService){
		console.log('enter controller_877')
		$scope.test = TestService.getTest()
	}
