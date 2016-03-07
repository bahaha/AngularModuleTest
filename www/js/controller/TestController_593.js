module.exports= function($scope, $state, TestService){
		console.log('enter controller_593')
		$scope.test = TestService.getTest()
	}
