module.exports= function($scope, $state, TestService){
		console.log('enter controller_504')
		$scope.test = TestService.getTest()
	}
