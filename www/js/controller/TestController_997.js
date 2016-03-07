module.exports= function($scope, $state, TestService){
		console.log('enter controller_997')
		$scope.test = TestService.getTest()
	}
