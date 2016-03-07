module.exports= function($scope, $state, TestService){
		console.log('enter controller_170')
		$scope.test = TestService.getTest()
	}
