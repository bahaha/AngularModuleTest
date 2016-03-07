module.exports= function($scope, $state, TestService){
		console.log('enter controller_907')
		$scope.test = TestService.getTest()
	}
