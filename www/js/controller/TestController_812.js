module.exports= function($scope, $state, TestService){
		console.log('enter controller_812')
		$scope.test = TestService.getTest()
	}
