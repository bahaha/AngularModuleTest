module.exports= function($scope, $state, TestService){
		console.log('enter controller_160')
		$scope.test = TestService.getTest()
	}
