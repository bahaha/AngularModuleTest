module.exports= function($scope, $state, TestService){
		console.log('enter controller_465')
		$scope.test = TestService.getTest()
	}
