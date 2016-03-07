module.exports= function($scope, $state, TestService){
		console.log('enter controller_974')
		$scope.test = TestService.getTest()
	}
