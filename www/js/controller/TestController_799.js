module.exports= function($scope, $state, TestService){
		console.log('enter controller_799')
		$scope.test = TestService.getTest()
	}
