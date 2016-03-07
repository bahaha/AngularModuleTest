module.exports= function($scope, $state, TestService){
		console.log('enter controller_312')
		$scope.test = TestService.getTest()
	}
