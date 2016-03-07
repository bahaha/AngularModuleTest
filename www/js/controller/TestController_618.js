module.exports= function($scope, $state, TestService){
		console.log('enter controller_618')
		$scope.test = TestService.getTest()
	}
