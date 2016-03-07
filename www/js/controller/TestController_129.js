module.exports= function($scope, $state, TestService){
		console.log('enter controller_129')
		$scope.test = TestService.getTest()
	}
