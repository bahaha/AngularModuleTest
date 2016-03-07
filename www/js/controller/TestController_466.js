module.exports= function($scope, $state, TestService){
		console.log('enter controller_466')
		$scope.test = TestService.getTest()
	}
