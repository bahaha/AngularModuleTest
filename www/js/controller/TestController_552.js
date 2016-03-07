module.exports= function($scope, $state, TestService){
		console.log('enter controller_552')
		$scope.test = TestService.getTest()
	}
