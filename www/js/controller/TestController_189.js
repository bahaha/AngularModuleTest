module.exports= function($scope, $state, TestService){
		console.log('enter controller_189')
		$scope.test = TestService.getTest()
	}
