module.exports= function($scope, $state, TestService){
		console.log('enter controller_659')
		$scope.test = TestService.getTest()
	}
