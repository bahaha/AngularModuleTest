module.exports= function($scope, $state, TestService){
		console.log('enter controller_636')
		$scope.test = TestService.getTest()
	}
