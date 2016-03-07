module.exports= function($scope, $state, TestService){
		console.log('enter controller_709')
		$scope.test = TestService.getTest()
	}
