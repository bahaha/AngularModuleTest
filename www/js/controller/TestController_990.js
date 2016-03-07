module.exports= function($scope, $state, TestService){
		console.log('enter controller_990')
		$scope.test = TestService.getTest()
	}
