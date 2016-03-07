module.exports= function($scope, $state, TestService){
		console.log('enter controller_565')
		$scope.test = TestService.getTest()
	}
