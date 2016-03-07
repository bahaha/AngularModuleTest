module.exports= function($scope, $state, TestService){
		console.log('enter controller_949')
		$scope.test = TestService.getTest()
	}
