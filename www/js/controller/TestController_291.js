module.exports= function($scope, $state, TestService){
		console.log('enter controller_291')
		$scope.test = TestService.getTest()
	}
