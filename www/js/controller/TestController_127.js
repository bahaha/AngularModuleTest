module.exports= function($scope, $state, TestService){
		console.log('enter controller_127')
		$scope.test = TestService.getTest()
	}
