module.exports= function($scope, $state, TestService){
		console.log('enter controller_508')
		$scope.test = TestService.getTest()
	}
