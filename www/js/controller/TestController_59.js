module.exports= function($scope, $state, TestService){
		console.log('enter controller_59')
		$scope.test = TestService.getTest()
	}
