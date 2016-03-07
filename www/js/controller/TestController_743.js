module.exports= function($scope, $state, TestService){
		console.log('enter controller_743')
		$scope.test = TestService.getTest()
	}
