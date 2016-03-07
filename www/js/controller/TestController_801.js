module.exports= function($scope, $state, TestService){
		console.log('enter controller_801')
		$scope.test = TestService.getTest()
	}
