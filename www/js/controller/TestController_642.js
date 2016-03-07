module.exports= function($scope, $state, TestService){
		console.log('enter controller_642')
		$scope.test = TestService.getTest()
	}
