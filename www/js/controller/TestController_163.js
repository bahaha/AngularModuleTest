module.exports= function($scope, $state, TestService){
		console.log('enter controller_163')
		$scope.test = TestService.getTest()
	}
