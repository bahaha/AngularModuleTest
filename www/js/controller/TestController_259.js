module.exports= function($scope, $state, TestService){
		console.log('enter controller_259')
		$scope.test = TestService.getTest()
	}
