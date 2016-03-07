module.exports= function($scope, $state, TestService){
		console.log('enter controller_484')
		$scope.test = TestService.getTest()
	}
