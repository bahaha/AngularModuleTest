module.exports= function($scope, $state, TestService){
		console.log('enter controller_926')
		$scope.test = TestService.getTest()
	}
