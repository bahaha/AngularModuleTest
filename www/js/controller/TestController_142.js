module.exports= function($scope, $state, TestService){
		console.log('enter controller_142')
		$scope.test = TestService.getTest()
	}
