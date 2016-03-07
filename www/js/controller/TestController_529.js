module.exports= function($scope, $state, TestService){
		console.log('enter controller_529')
		$scope.test = TestService.getTest()
	}
