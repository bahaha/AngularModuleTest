module.exports= function($scope, $state, TestService){
		console.log('enter controller_81')
		$scope.test = TestService.getTest()
	}
