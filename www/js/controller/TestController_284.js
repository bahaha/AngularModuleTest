module.exports= function($scope, $state, TestService){
		console.log('enter controller_284')
		$scope.test = TestService.getTest()
	}
