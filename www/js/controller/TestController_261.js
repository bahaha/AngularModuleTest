module.exports= function($scope, $state, TestService){
		console.log('enter controller_261')
		$scope.test = TestService.getTest()
	}
