module.exports= function($scope, $state, TestService){
		console.log('enter controller_253')
		$scope.test = TestService.getTest()
	}
