module.exports= function($scope, $state, TestService){
		console.log('enter controller_779')
		$scope.test = TestService.getTest()
	}
