module.exports= function($scope, $state, TestService){
		console.log('enter controller_751')
		$scope.test = TestService.getTest()
	}
