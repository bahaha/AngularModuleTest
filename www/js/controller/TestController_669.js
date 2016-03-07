module.exports= function($scope, $state, TestService){
		console.log('enter controller_669')
		$scope.test = TestService.getTest()
	}
