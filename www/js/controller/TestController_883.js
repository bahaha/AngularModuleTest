module.exports= function($scope, $state, TestService){
		console.log('enter controller_883')
		$scope.test = TestService.getTest()
	}
