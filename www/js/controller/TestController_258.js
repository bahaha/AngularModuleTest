module.exports= function($scope, $state, TestService){
		console.log('enter controller_258')
		$scope.test = TestService.getTest()
	}
