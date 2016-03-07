module.exports= function($scope, $state, TestService){
		console.log('enter controller_519')
		$scope.test = TestService.getTest()
	}
