module.exports= function($scope, $state, TestService){
		console.log('enter controller_335')
		$scope.test = TestService.getTest()
	}
