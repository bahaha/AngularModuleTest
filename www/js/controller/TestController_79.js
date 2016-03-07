module.exports= function($scope, $state, TestService){
		console.log('enter controller_79')
		$scope.test = TestService.getTest()
	}
