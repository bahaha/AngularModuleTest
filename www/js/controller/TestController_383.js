module.exports= function($scope, $state, TestService){
		console.log('enter controller_383')
		$scope.test = TestService.getTest()
	}
