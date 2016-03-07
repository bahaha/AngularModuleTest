module.exports= function($scope, $state, TestService){
		console.log('enter controller_84')
		$scope.test = TestService.getTest()
	}
