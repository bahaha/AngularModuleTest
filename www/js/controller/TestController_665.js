module.exports= function($scope, $state, TestService){
		console.log('enter controller_665')
		$scope.test = TestService.getTest()
	}
