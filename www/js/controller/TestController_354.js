module.exports= function($scope, $state, TestService){
		console.log('enter controller_354')
		$scope.test = TestService.getTest()
	}
