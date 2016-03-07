module.exports= function($scope, $state, TestService){
		console.log('enter controller_803')
		$scope.test = TestService.getTest()
	}
