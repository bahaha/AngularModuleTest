module.exports= function($scope, $state, TestService){
		console.log('enter controller_209')
		$scope.test = TestService.getTest()
	}
