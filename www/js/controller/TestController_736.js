module.exports= function($scope, $state, TestService){
		console.log('enter controller_736')
		$scope.test = TestService.getTest()
	}
