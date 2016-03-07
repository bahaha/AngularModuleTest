module.exports= function($scope, $state, TestService){
		console.log('enter controller_52')
		$scope.test = TestService.getTest()
	}
