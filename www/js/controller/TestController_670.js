module.exports= function($scope, $state, TestService){
		console.log('enter controller_670')
		$scope.test = TestService.getTest()
	}
