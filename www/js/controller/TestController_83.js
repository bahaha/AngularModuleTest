module.exports= function($scope, $state, TestService){
		console.log('enter controller_83')
		$scope.test = TestService.getTest()
	}
