module.exports= function($scope, $state, TestService){
		console.log('enter controller_341')
		$scope.test = TestService.getTest()
	}
