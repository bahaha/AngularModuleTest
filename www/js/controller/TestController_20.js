module.exports= function($scope, $state, TestService){
		console.log('enter controller_20')
		$scope.test = TestService.getTest()
	}
