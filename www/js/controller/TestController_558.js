module.exports= function($scope, $state, TestService){
		console.log('enter controller_558')
		$scope.test = TestService.getTest()
	}
