module.exports= function($scope, $state, TestService){
		console.log('enter controller_905')
		$scope.test = TestService.getTest()
	}
