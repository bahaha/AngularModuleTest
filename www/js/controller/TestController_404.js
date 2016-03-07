module.exports= function($scope, $state, TestService){
		console.log('enter controller_404')
		$scope.test = TestService.getTest()
	}
