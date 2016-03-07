module.exports= function($scope, $state, TestService){
		console.log('enter controller_896')
		$scope.test = TestService.getTest()
	}
