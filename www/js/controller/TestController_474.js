module.exports= function($scope, $state, TestService){
		console.log('enter controller_474')
		$scope.test = TestService.getTest()
	}
