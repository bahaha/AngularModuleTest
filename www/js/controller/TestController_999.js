module.exports= function($scope, $state, TestService){
		console.log('enter controller_999')
		$scope.test = TestService.getTest()
	}
