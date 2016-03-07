module.exports= function($scope, $state, TestService){
		console.log('enter controller_75')
		$scope.test = TestService.getTest()
	}
