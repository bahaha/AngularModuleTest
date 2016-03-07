module.exports= function($scope, $state, TestService){
		console.log('enter controller_915')
		$scope.test = TestService.getTest()
	}
