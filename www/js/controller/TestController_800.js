module.exports= function($scope, $state, TestService){
		console.log('enter controller_800')
		$scope.test = TestService.getTest()
	}
