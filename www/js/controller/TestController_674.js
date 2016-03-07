module.exports= function($scope, $state, TestService){
		console.log('enter controller_674')
		$scope.test = TestService.getTest()
	}
