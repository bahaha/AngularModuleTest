module.exports= function($scope, $state, TestService){
		console.log('enter controller_646')
		$scope.test = TestService.getTest()
	}
