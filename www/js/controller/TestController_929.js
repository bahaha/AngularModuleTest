module.exports= function($scope, $state, TestService){
		console.log('enter controller_929')
		$scope.test = TestService.getTest()
	}
