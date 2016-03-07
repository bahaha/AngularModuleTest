module.exports= function($scope, $state, TestService){
		console.log('enter controller_331')
		$scope.test = TestService.getTest()
	}
