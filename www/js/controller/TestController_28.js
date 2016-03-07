module.exports= function($scope, $state, TestService){
		console.log('enter controller_28')
		$scope.test = TestService.getTest()
	}
