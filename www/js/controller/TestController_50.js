module.exports= function($scope, $state, TestService){
		console.log('enter controller_50')
		$scope.test = TestService.getTest()
	}
