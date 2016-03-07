module.exports= function($scope, $state, TestService){
		console.log('enter controller_540')
		$scope.test = TestService.getTest()
	}
