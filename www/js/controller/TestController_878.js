module.exports= function($scope, $state, TestService){
		console.log('enter controller_878')
		$scope.test = TestService.getTest()
	}
