module.exports= function($scope, $state, TestService){
		console.log('enter controller_46')
		$scope.test = TestService.getTest()
	}
