module.exports= function($scope, $state, TestService){
		console.log('enter controller_167')
		$scope.test = TestService.getTest()
	}
